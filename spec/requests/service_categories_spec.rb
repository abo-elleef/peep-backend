# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Service Categories API", type: :request do
  let(:categories) { create_list(:service_category, 3) }
  let(:test_category) { create(:service_category) }
  let(:category_params) do
    {
        service_category: {
            name: "test category creation",
            description: "test description for creating category",
            appointment_color: Faker::Color.hex_color
        }}
  end

  describe "GET /index" do
    it "returns a list of all service categories" do
      categories
      get "/service_categories"
      expect(response).to have_http_status(:success)
      expect(parsed_response["data"].size).to eq(3)
    end

    #searching test
    it "list all categories data that match search with name " do
      get "/service_categories?name=#{categories.first.name}"
      expect(response.code).to eq("200")
      expect(parsed_response["data"].size).to eq(1)
    end
  end

  describe "GET /show" do
    context 'when valid request' do
      it "get the correct category" do
        get "/service_categories/#{categories.first.id}"
        expect(response).to have_http_status(:success)
        expect(parsed_response["data"]["id"].to_i).to eq(categories.first.id)
      end
    end
  end

  describe "POST /create" do
    it "create new category with the right params" do
      expect { post "/service_categories", params: category_params }.to change(ServiceCategory, :count).by(+1)
      expect(ServiceCategory.last.name).to eq("test category creation")
    end
  end

  describe "PUT /update" do
    it "should update the required param" do
      test_category
      put "/service_categories/#{test_category.id}", params: {service_category: {name: "updated category name"}}
      test_category.reload
      expect(response).to have_http_status(:success)
      expect(test_category.name).to eq("updated category name")
    end
  end

  describe "DELETE /delete" do
    it "delete a category" do
      test_category
      expect { delete "/service_categories/#{test_category.id}" }.to change(ServiceCategory, :count).by(-1)
    end
  end

end
