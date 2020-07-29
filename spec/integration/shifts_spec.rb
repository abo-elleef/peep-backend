require 'swagger_helper'

describe 'Shifts API' do
  path '/shifts' do
    get 'Retrieves a set of shifts' do
      tags 'shifts'
      produces 'application/json'
      response '200', 'shifts set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/shifts/{id}' do
    get ' single shift data' do
      tags 'shifts'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'shift data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'shift not found' do
        run_test!
      end
    end
  end

  path '/shifts/{id}' do
    delete 'delete shift object' do
      tags 'shifts'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'shift data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'shift not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/shifts' do
    post 'create a shift record' do
      tags 'shifts'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          shift: {
            type: :object,
            properties: {
              day: {type: :integer},
              start_time: {type: :string},
              end_time: {type: :string},
              staff_id: {type: :integer},
              location_id: {type: :integer},
            }
          }
        }
      }
      response '201', 'shift created' do
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

  path '/shifts/{id}' do
    put 'update a shift record' do
      tags 'shifts'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          shift: {
            type: :object,
            properties: {
              day: {type: :integer},
              start_time: {type: :string},
              end_time: {type: :string},
              staff_id: {type: :integer},
              location_id: {type: :integer},
            }
          }
        }
      }
      response '200', 'shift updated' do
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
