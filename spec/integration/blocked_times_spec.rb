require 'swagger_helper'

describe 'Blocked Times API' do
  path '/blocked_times' do
    get 'Retrieves a set of blocked_times' do
      tags 'blocked_times'
      produces 'application/json'
      response '200', 'blocked_times set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
  path '/blocked_times/{id}' do
    get ' single blocked_time data' do
      tags 'blocked_times'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'blocked_time data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'blocked_time not found' do
        run_test!
      end
    end
  end

  path '/blocked_times/{id}' do
    delete 'delete blocked_time object' do
      tags 'blocked_times'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'blocked_time data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'blocked_time not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/blocked_times' do
    post 'create a blocked_time record' do
      tags 'blocked_times'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              blocked_time: {
                  type: :object,
                  properties: {
                      starts_at: {type: :string},
                      ends_at: {type: :string},
                      staff_id: {type: :integer},
                      reason: {type: :string}
                  }
              }
          }
      }
      response '201', 'blocked_time created' do
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

  path '/blocked_times/{id}' do
    put 'update a blocked_time record' do
      tags 'blocked_times'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              blocked_time: {
                  type: :object,
                  properties: {
                      starts_at: {type: :string},
                      ends_at: {type: :string},
                      staff_id: {type: :integer},
                      reason: {type: :string}
                  }
              }
          }
      }
      response '200', 'blocked_time updated' do
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
