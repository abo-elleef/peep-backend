require 'swagger_helper'

describe 'Payment Type API' do
  path '/payment_types' do
    get 'Retrieves a set of payment_types' do
      tags 'payment_types'
      produces 'application/json'
      response '200', 'payment_types set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/payment_types/{id}' do
    get 'Retrieves data of payment_types' do
      tags 'payment_types'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'payment_type data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'payment_type not found' do
        run_test!
      end
    end
  end

  path '/payment_types/{id}' do
    delete 'delete a payment type' do
      tags 'payment_types'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'payment_type deleted' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'payment_type not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/payment_types' do
    post 'create a payment_type record' do
      tags 'payment_types'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              payment_type: {
                  type: :object,
                  properties: {
                      name: {type: :string}
                  }
              }
          }
      }
      response '201', 'payment_type created' do
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

  path '/payment_types/{id}' do
    put 'update a payment_type record' do
      tags 'payment_types'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              payment_type: {
                  type: :object,
                  properties: {
                      name: {type: :string}
                  }
              }
          }
      }
      response '201', 'payment_type updated' do
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