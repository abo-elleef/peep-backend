require "rails_helper"

RSpec.describe "Clients API", :type => :request do

  it "list all clients data" do
    get "/clients"
    expect(response.code).to eq("200")
  end
end
