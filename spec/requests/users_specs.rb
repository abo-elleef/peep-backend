# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Users API", type: :request do
  describe "#create" do
    let(:user_params) {
      { user: {
        first_name: "first name ",
        last_name: "last name ",
        username: "username",
        email: "test@email.com",
        password: "12341234",
        password_confirmation:  "12341234",
        company_name: "company name",
        business_type: "spa"
      } }
    }
    it "create user" do
      post "/users", params: user_params
      expect(response.code).to eq("201")
    end
  end
  describe "#show" do
    let(:user) { User.create }
    let(:location) { Location.create(user_id: user.id) }
    let(:token) do
      payload = { user_id: user.id, location_id: location.id}
      JWT.encode payload, JwtService::AUTH_KEY, 'HS256'
    end
    xit "show user data" do
      get "/users", { headers: {authorization: token}}
      expect(response.code).to eq("200")
    end
  end
end
