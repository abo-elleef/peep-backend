require 'swagger_helper'

describe 'Cancellation Reasons API' do
  path '/cancellation_reasons' do
    get 'Retrieves a set of cancellation_reasons' do
      tags 'cancellation_reasons'
      produces 'application/json'
      response '200', 'cancellation_reasons set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/cancellation_reasons/{id}' do
    get 'Retrieves data of cancellation_reasons' do
      tags 'cancellation_reasons'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'cancellation_reason data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'cancellation_reason not found' do
        run_test!
      end
    end
  end

  path '/cancellation_reasons/{id}' do
    delete 'delete a cancellation_reasons' do
      tags 'cancellation_reasons'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'cancellation_reason deleted' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'cancellation_reason not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/cancellation_reasons' do
    post 'create a cancellation_reason record' do
      tags 'cancellation_reasons'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              cancellation_reason: {
                  type: :object,
                  properties: {
                      name: {type: :string}
                  }
              }
          }
      }
      response '201', 'cancellation_reason created' do
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

  path '/cancellation_reasons/{id}' do
    put 'update a cancellation_reason record' do
      tags 'cancellation_reasons'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              cancellation_reason: {
                  type: :object,
                  properties: {
                      name: {type: :string}
                  }
              }
          }
      }
      response '201', 'cancellation_reason updated' do
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
