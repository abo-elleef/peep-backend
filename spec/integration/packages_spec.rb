require 'swagger_helper'

describe 'Packages API' do
  #Packages Index
  path '/packages' do
    get 'Retrieves a set of packages' do
      tags 'packages'
      produces 'application/json'
      response '200', 'packages set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  #Show package
  path '/packages/{id}' do
    get 'show details of a package' do
      tags 'packages'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'packages data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'packages not found' do
        run_test!
      end
    end
  end

  #Delete package
  path '/packages/{id}' do
    delete 'delete package' do
      tags 'packages'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'packages data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'package not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  #Create package
  path '/packages' do
    post 'create an package record' do
      tags 'packages'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              package: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      description: {type: :string},
                      available_for: {type: :integer},
                      pricing_type: {type: :integer},
                      deduction_amount: {type: :number},
                      final_price: {type: :number},
                      schedule_type: {type: :integer},
                      service_prices: {
                          type: :array,
                          items: {
                              properties: {
                                  id: {type: :integer}
                              }
                          }
                      }
                  }
              }
          }
      }
      response '201', 'package created' do
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

  #Update package
  path '/packages/{id}' do
    put 'update an package record' do
      tags 'packages'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              package: {
                  type: :object,
                  properties: {
                      name: {type: :string},
                      description: {type: :string},
                      available_for: {type: :integer},
                      pricing_type: {type: :integer},
                      deduction_percentage: {type: :number},
                      final_price: {type: :number},
                      schedule_type: {type: :integer},
                      service_prices: {
                          type: :array,
                          items: {
                              properties: {
                                  id: {type: :integer}
                              }
                          }
                      }
                  }
              }
          }
      }
      response '200', 'package updated' do
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
