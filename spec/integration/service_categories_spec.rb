require 'swagger_helper'

describe 'ServiceCategories API' do
  path '/service_categories' do
    get 'Retrieves a set of service categories' do
      tags 'service_categories'
      produces 'application/json'
      response '200', 'service_categories set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/service_categories/{id}' do
    get 'show details of service category' do
      tags 'service_categories'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'service_categories data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'service_categories not found' do
        run_test!
      end
    end
  end

  path '/service_categories/{id}' do
    delete 'delete service category member' do
      tags 'service_categories'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'service_categories data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'service category not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/service_categories' do
    post 'create a service category record' do
      tags 'service_categories'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              service_category: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      appointment_color: {type: :integer},
                      description: {type: :text}
                  }
              }
          }
      }
      response '201', 'service category created' do
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

  path '/service_categories/{id}' do
    put 'update a service category record' do
      tags 'service_categories'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              service_category: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      appointment_color: {type: :integer},
                      description: {type: :text}
                  }
              }
          }
      }
      response '201', 'service category created' do
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
