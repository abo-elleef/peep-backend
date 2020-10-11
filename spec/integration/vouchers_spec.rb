require 'swagger_helper'

describe 'Vouchers API' do
  #check_voucher_validity
  path '/vouchers/check_voucher_validity' do
    post ' check if voucher available to use ' do
      tags 'vouchers'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              voucher: {
                  type: :object,
                  properties: {
                      voucher_code: {type: :string}
                  }
              }
          }
      }
      response '201', 'voucher checked' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '442', 'bad data or breaks validation ' do
        run_test!
      end
    end
  end
end