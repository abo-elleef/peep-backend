require 'swagger_helper'

describe 'Staffs API' do
  path '/staffs' do
    get 'Retrieves a set of staffs' do
      tags 'staffs'
      produces 'application/json'
      response '200', 'staffs set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/staffs/{id}' do
    get 'show details of staff member' do
      tags 'staffs'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'staffs data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'staffs not found' do
        run_test!
      end
    end
  end

  path '/staffs/{id}' do
    delete 'delete staff member' do
      tags 'staffs'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'staffs data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'staff not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/staffs' do
    post 'create a staff record' do
      tags 'staffs'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          staff: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              phone: {type: :string},
              email: {type: :string},
              booking_enabled: {type: :boolean},
              booking_color: {type: :string},
              title: {type: :string},
              notes: {type: :string},
              contract_start: {type: :string},
              contract_end: {type: :string},
            }
          }
        }
      }
      response '201', 'staff created' do
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

  path '/staffs/{id}' do
    put 'update a staff record' do
      tags 'staffs'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          staff: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              phone: {type: :string},
              email: {type: :string},
              booking_enabled: {type: :boolean},
              booking_color: {type: :string},
              title: {type: :string},
              notes: {type: :string},
              contract_start: {type: :string},
              contract_end: {type: :string},
            }
          }
        }
      }
      response '201', 'staff updated' do
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
