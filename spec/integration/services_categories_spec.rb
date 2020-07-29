require 'swagger_helper'

describe 'ServicesCategories API' do
  path '/services_categories' do
    get 'Retrieves a set of services categories' do
      tags 'services_categories'
      produces 'application/json'
      response '200', 'services_categories set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/services_categories/{id}' do
    get 'show details of service category' do
      tags 'services_categories'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'services_categories data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'services_categories not found' do
        run_test!
      end
    end
  end

  path '/services_categories/{id}' do
    delete 'delete services category member' do
      tags 'services_categories'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'services_categories data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'services category not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/services_categories' do
    post 'create a services category record' do
      tags 'services_categories'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              services_category: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      appointment_color: {type: :integer},
                      description: {type: :text}
                  }
              }
          }
      }
      response '201', 'services category created' do
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

  path '/services_categories/{id}' do
    put 'update a services category record' do
      tags 'services_categories'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              services_category: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      appointment_color: {type: :integer},
                      description: {type: :text}
                  }
              }
          }
      }
      response '201', 'services category created' do
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
