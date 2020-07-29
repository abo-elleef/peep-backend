require 'swagger_helper'

describe 'Services API' do
  path '/services' do
    get 'Retrieves a set of services' do
      tags 'services'
      produces 'application/json'
      response '200', 'services set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/services/{id}' do
    get 'show details of a service' do
      tags 'services'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'services data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'services not found' do
        run_test!
      end
    end
  end

  path '/services/{id}' do
    delete 'delete service' do
      tags 'services'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'services data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'service not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/services' do
    post 'create a service record' do
      tags 'services'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              service: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      treatment_type_id: {type: :integer},
                      description: {type: :text},
                      available_for: {type: :integer},
                      online_booking: {type: :boolean},
                      staff_commission: {type: :string},
                      extra_time: {type: :boolean},
                      extra_time_type: {type: :integer},
                      extra_time_duration: {type: :integer}
                  }
              }
          }
      }
      response '201', 'service created' do
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

  path '/services/{id}' do
    put 'update a service record' do
      tags 'services'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              service: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      treatment_type_id: {type: :integer},
                      description: {type: :text},
                      available_for: {type: :integer},
                      online_booking: {type: :boolean},
                      staff_commission: {type: :boolean},
                      extra_time: {type: :boolean},
                      extra_time_type: {type: :integer},
                      extra_time_duration: {type: :integer}
                  }
              }
          }
      }
      response '201', 'service created' do
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
