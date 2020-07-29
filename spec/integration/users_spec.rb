require 'swagger_helper'

describe 'Staffs API' do
  path '/users/{id}' do
    get 'show details of user' do
      tags 'users'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'user data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'users not found' do
        run_test!
      end
    end
  end


  path '/users' do
    post 'create a user record' do
      tags 'users'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              email: {type: :string},
              password: {type: :string},
              password_confirmation: {type: :string},
              company_name: {type: :string},
              business_type: {type: :string},
            }
          }
        }
      }
      response '201', 'user created' do
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

  path '/users/{id}' do
    put 'update a user record' do
      tags 'users'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              email: {type: :string},
              password: {type: :string},
              password_confirmation: {type: :string},
              company_name: {type: :string},
              business_type: {type: :string},
            }
          }
        }
      }
      response '201', 'user updated' do
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
