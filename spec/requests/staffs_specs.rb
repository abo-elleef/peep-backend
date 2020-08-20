# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Staffs API", type: :request do
  let(:user) { User.create }
  let(:locations) {create_list(:location, 2, user_id: user.id)}
  let(:staffs) {create_list(:staff, 4)}
  let(:token) do
    payload = { user_id: user.id, location_id: locations.first.id}
    JWT.encode payload, JwtService::AUTH_KEY, 'HS256'
  end
  describe "#index" do
    xit "show user data" do
      locations.first.staff_ids = staffs.first(2).map(&:id)
      locations.last.staff_ids = staffs.last(2).map(&:id)
      get "/staffs", { headers: {authorization: token}}
      expect(response.code).to eq("200")
      expect(parsed_response['data'].size).to eq(2)
    end
  end
  describe "#create" do
    let(:services) {create_list(:service, 2)}
    let(:staff_params) do { staff:  build(:staff).attributes.
      merge({location_ids: locations.map(&:id)}).
      merge({service_ids: services.map(&:id)})
    }
    end
    xit "create staff" do
      post "/staffs", params: staff_params, headers: {authorization: token}
      expect(response.code).to eq("201")
    end
  end
end
