require 'swagger_helper'

describe 'Voucher Types API' do

  #Voucher Types Index
  path '/voucher_types' do
    get 'Retrieves a set of voucher_types' do
      tags 'voucher_types'
      produces 'application/json'
      response '200', 'voucher_types set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  #show Voucher type
  path '/voucher_types/{id}' do
    get 'show details of a voucher_type' do
      tags 'voucher_types'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'voucher_types data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'voucher_types not found' do
        run_test!
      end
    end
  end

  #delete Voucher type
  path '/voucher_types/{id}' do
    delete 'delete voucher_type' do
      tags 'voucher_types'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'voucher_types data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'voucher_type not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  #create new Voucher type
  path '/voucher_types' do
    post 'create a voucher_type record' do
      tags 'voucher_types'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              voucher_type: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      value: {type: :text},
                      price: {type: :integer},
                      sales_amount: {type: :string},
                      title: {type: :boolean},
                      color: {type: :integer},
                      starts_at: {type: :integer},
                      ends_at: {type: :integer},
                      services_ids: {type: :array}
                      }
                  }
              }
          }
      response '201', 'voucher_type created' do
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

  # update Voucher Type
  path '/voucher_types/{id}' do
    put 'update a voucher_type record' do
      tags 'voucher_types'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              voucher_type: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      value: {type: :text},
                      price: {type: :integer},
                      sales_amount: {type: :string},
                      title: {type: :boolean},
                      color: {type: :integer},
                      starts_at: {type: :integer},
                      ends_at: {type: :integer},
                      services_ids: {type: :array}
                  }
              }
          }
      }
      response '200', 'voucher_type updated' do
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
