require 'swagger_helper'

describe 'Invoice Sequence  API' do
  path '/invoice_sequences' do
    get 'Retrieves a set of invoice_sequences' do
      tags 'invoice_sequences'
      produces 'application/json'
      response '200', 'invoice_sequences set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/invoice_sequences/{id}' do
    get 'Retrieves data of invoice_sequences' do
      tags 'invoice_sequences'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'invoice_sequence data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'invoice_sequence not found' do
        run_test!
      end
    end
  end

  path '/invoice_sequences/{id}' do
    delete 'delete a invoice_sequences' do
      tags 'invoice_sequences'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'invoice_sequence deleted' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'invoice_sequence not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  path '/invoice_sequences' do
    post 'create a invoice_sequence record' do
      tags 'invoice_sequences'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              invoice_sequence: {
                  type: :object,
                  properties: {
                      location_id: {type: :integer},
                      num_prefix: {type: :string},
                      next_num: {type: :integer}
                  }
              }
          }
      }
      response '201', 'invoice_sequence created' do
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

  path '/invoice_sequences/{id}' do
    put 'update a invoice_sequence record' do
      tags 'invoice_sequences'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              invoice_sequence: {
                  type: :object,
                  properties: {
                      location_id: {type: :integer},
                      num_prefix: {type: :string},
                      next_num: {type: :integer}
                  }
              }
          }
      }
      response '201', 'invoice_sequence updated' do
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
