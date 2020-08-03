# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Services API", type: :request do

  describe "GET /index" do
    let(:services) {create_list(:service, 5 )}
    it "returns a list of all services" do
      services
      get "/services"
      expect(response).to have_http_status(:success)
      expect(parsed_response["data"].size).to eq(5)
    end

    it "list all Services data that match search with name " do
      get "/services?search=#{services.first.name}"
      expect(response.code).to eq("200")
      expect(parsed_response["data"].size).to eq(1)
    end
  end

  describe "GET /show" do
    context 'when valid request' do
      it "returns http success" do
        get "/services/show"
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "POST /create" do
    it "returns http success" do
      get "/services/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
    it "returns http success" do
      get "/services/update"
      expect(response).to have_http_status(:success)
    end
  end

end
