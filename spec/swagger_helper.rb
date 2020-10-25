# frozen_string_literal: true

require "rails_helper"

RSpec.configure do |config|
  config.swagger_root = Rails.root.join("swagger").to_s
  config.swagger_docs = {
    "v1/swagger.json" => {
      openapi: "3.0.1",
      info: {
        title: "Peep API V1",
        version: "v1"
      },
      paths: {},
      securityDefinitions: {
          JWT: {
              description: 'the jwt for API auth',
              type: :apiKey,
              name: 'Authorization',
              in: :header
          }
      }
    }
  }

  config.swagger_format = :json
end
