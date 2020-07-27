require 'swagger_helper'

describe 'Clients API' do
  path '/clients' do
    get 'Retrieves a set of clients' do
      tags 'clients'
      produces 'application/json'
      parameter name: :page, in: :query, type: :integer, required: false
      parameter name: :page_size, in: :query, type: :integer, required: false
      response '200', 'clients set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/clients/{id}' do
    get 'Retrieves a set of clients' do
      tags 'clients'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'client data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'client not found' do
        run_test!
      end
    end
  end

  path '/clients/{id}' do
    delete 'Retrieves a set of clients' do
      tags 'clients'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'client data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'client not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/clients' do
    post 'create a client record' do
      tags 'clients'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          client: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              phone: {type: :string},
              email: {type: :string},
              notify_method: {type: :string},
              language: {type: :string},
              gender: {type: :integer},
              birthday: {type: :string},
              notes: {type: :string},
              global_notes: {type: :boolean},
              street: {type: :string},
              suburb: {type: :string},
              city: {type: :string},
              state: {type: :string},
              postal_code: {type: :string}
            }
          }
        }
      }
      response '201', 'client created' do
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

  path '/clients/{id}' do
    put 'update a client record' do
      tags 'clients'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          client: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              phone: {type: :string},
              email: {type: :string},
              notify_method: {type: :string},
              language: {type: :string},
              gender: {type: :integer},
              birthday: {type: :string},
              notes: {type: :string},
              global_notes: {type: :boolean},
              street: {type: :string},
              suburb: {type: :string},
              city: {type: :string},
              state: {type: :string},
              postal_code: {type: :string}
            }
          }
        }
      }
      response '201', 'client created' do
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
