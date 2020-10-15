# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Clients API", type: :request do
  describe "#index" do
    let(:clients) {create_list(:client, 3 )}
    context "no params" do

      it "list all clients data" do
        clients
        get "/clients"
        expect(response.code).to eq("200")
        expect(parsed_response["data"].size).to eq(3)
      end
      it "list all clients data that match search with first name " do
        get "/clients?search=#{clients.first.first_name}"
        expect(response.code).to eq("200")
        expect(parsed_response["data"].size).to eq(1)
      end
      it "list all clients data that match search with last name " do
        get "/clients?search=#{clients.first.last_name}"
        expect(response.code).to eq("200")
        expect(parsed_response["data"].size).to eq(1)
      end
      it "list all clients data that match search with last name " do
        get "/clients?search=#{clients.first.phone}"
        expect(response.code).to eq("200")
        expect(parsed_response["data"].size).to eq(1)
      end
    end
  end
end
