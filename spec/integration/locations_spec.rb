require 'swagger_helper'

describe 'Clients API' do
  path '/locations' do
    get 'Retrieves a set of locations' do
      tags 'locations'
      produces 'application/json'
      response '200', 'locations set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/locations/{id}' do
    get ' single location data' do
      tags 'locations'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'location data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'location not found' do
        run_test!
      end
    end
  end

  path '/locations/{id}' do
    delete 'delete location object' do
      tags 'locations'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'location data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'location not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/locations' do
    post 'create a location record' do
      tags 'locations'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          location: {
            type: :object,
            properties: {
              name: {type: :string},
              business_type: {type: :string},
              phone: {type: :string},
              email: {type: :string},
              street: {type: :string},
              building: {type: :string},
              city: {type: :string},
              state: {type: :string},
              zipcode: {type: :string},
              created_at: {type: :string},
              updated_at: {type: :string},
            }
          }
        }
      }
      response '201', 'location created' do
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

  path '/locations/{id}' do
    put 'update a location record' do
      tags 'locations'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          location: {
            type: :object,
            properties: {
              name: {type: :string},
              business_type: {type: :string},
              phone: {type: :string},
              email: {type: :string},
              street: {type: :string},
              building: {type: :string},
              city: {type: :string},
              state: {type: :string},
              zipcode: {type: :string},
              created_at: {type: :string},
              updated_at: {type: :string},
            }
          }
        }
      }
      response '201', 'location created' do
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
