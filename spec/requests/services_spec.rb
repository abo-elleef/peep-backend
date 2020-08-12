# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Services API", type: :request do
  let(:services) { create_list(:service, 5) }
  let(:test_service) { create(:service) }
  let(:test_category) { create(:service_category) }
  let(:user) { create(:user) }
  let(:location) { create(:location, user: user) }

  describe "GET /index" do
    it "returns a list of all services" do
      location.services = services
      get "/services"
      expect(response).to have_http_status(:success)
      expect(parsed_response["data"].size).to eq(5)
    end

    #searching test
    it "list all Services data that match search with name " do
      location.services = services
      get "/services?name=#{services.first.name}"
      expect(response).to have_http_status(:success)
      expect(parsed_response["data"].size).to eq(1)
    end
  end

  describe "GET /show" do
    context 'when valid request' do
      it "show service object " do
        get "/services/#{services.first.id}"
        expect(response).to have_http_status(:success)
        expect(parsed_response["data"]["id"].to_i).to eq(services.first.id)
      end
    end
  end

  describe "POST /create" do
    it "create new service with the right params" do
      expect { post "/services", params: {service: attributes_for(:service, service_category_id: test_category.id)} }.to change(Service, :count).by(+1)
      expect(response).to have_http_status(:success)
      expect(Service.last.service_category_id).to eq(test_category.id)
    end
  end

  describe "PUT /update" do
    it "should update the required param" do
      test_service
      put "/services/#{test_service.id}", params: {service: {name: "updated service name"}}
      test_service.reload
      expect(response).to have_http_status(:success)
      expect(test_service.name).to eq("updated service name")
    end
  end

  describe "DELETE /delete" do
    it "delete a service" do
      test_service
      expect { delete "/services/#{test_service.id}" }.to change(Service, :count).by(-1)
    end
  end

end
