# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Service Categories API", type: :request do
  let!(:user) { create(:user) }
  let!(:headers) { request_headers(user) }
  let(:categories) { create_list(:service_category,  3, {user_id: user.id}) }
  let(:test_category) { create(:service_category, {user_id: user.id}) }


  describe "GET /index" do
    it "returns a list of all service categories" do
      categories
      get "/service_categories",  {headers: headers}
      expect(response).to have_http_status(:success)
      expect(parsed_response["data"].size).to eq(3)
    end

    #searching test
    it "list all categories data that match search with name " do
      get "/service_categories?name=#{categories.first.name}",  {headers: headers}
      expect(response).to have_http_status(:success)
      expect(parsed_response["data"].size).to eq(1)
    end
  end

  describe "GET /show" do
    context 'when valid request' do
      it "show service category object " do
        get "/service_categories/#{categories.first.id}",  {headers: headers}
        expect(response).to have_http_status(:success)
        expect(parsed_response["data"]["id"].to_i).to eq(categories.first.id)
      end
    end
  end

  describe "POST /create" do
    it "create new category with the right params" do
      expect { post "/service_categories",  {headers: headers, params: {service_category: attributes_for(:service_category, name: "spec category")} }}.to change(ServiceCategory, :count).by(+1)
      expect(ServiceCategory.last.name).to eq("spec category")
    end
  end

  describe "PUT /update" do
    it "should update the required param" do
      test_category
      put "/service_categories/#{test_category.id}", {headers: headers, params: {service_category: {name: "updated category name"}}}
      test_category.reload
      expect(response).to have_http_status(:success)
      expect(test_category.name).to eq("updated category name")
    end
  end

  describe "DELETE /delete" do
    it "delete a category" do
      categories
      expect { delete "/service_categories/#{categories.first.id}", {headers: headers}}.to change(ServiceCategory.unscoped, :count).by(-1)
    end
  end

end
