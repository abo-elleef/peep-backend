require 'swagger_helper'

describe 'Appointments API' do
  #Appointments Index
  path '/appointments' do
    get 'Retrieves a set of appointments' do
      tags 'appointments'
      produces 'application/json'
      response '200', 'appointments set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  #Shoow appointment
  path '/appointments/{id}' do
    get 'show details of a appointment' do
      tags 'appointments'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'appointments data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'appointments not found' do
        run_test!
      end
    end
  end

  #Delete appointment
  path '/appointments/{id}' do
    delete 'delete appointment' do
      tags 'appointments'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'appointments data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'appointment not found' do
        run_test!
      end
      response '442', 'can not be deleted' do
        run_test!
      end
    end
  end

  #Create appointment
  path '/appointments' do
    post 'create a appointment record' do
      tags 'appointments'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              appointment: {
                  type: :object,
                  properties: {
                      status: {type: :integer},
                      client_id: {type: :integer},
                      location_id: {type: :integer},
                      notes: {type: :string},
                      date: {type: :string},
                      lines_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  staff_id: {type: :integer},
                                  staff_name: {type: :integer},
                                  service_id: {type: :integer},
                                  service_name: {type: :integer},
                                  price_name: {type: :string},
                                  price: {type: :number},
                                  original_price: {type: :number},
                                  starts_at: {type: :string},
                                  ends_at: {type: :string}
                              }
                          }
                      }
                  }
              }
          }
      }
      response '201', 'appointment created' do
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

  #Update appointment
  path '/appointments/{id}' do
    put 'update a appointment record' do
      tags 'appointments'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              appointment: {
                  type: :object,
                  properties: {
                      status: {type: :integer},
                      client_id: {type: :integer},
                      location_id: {type: :integer},
                      notes: {type: :string},
                      date: {type: :string},
                      lines_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  appointment_id: {type: :integer},
                                  staff_id: {type: :integer},
                                  staff_name: {type: :integer},
                                  service_id: {type: :integer},
                                  service_name: {type: :integer},
                                  price_name: {type: :string},
                                  price: {type: :number},
                                  original_price: {type: :number},
                                  starts_at: {type: :string},
                                  ends_at: {type: :string}
                              }
                          }
                      }
                  }
              }
          }
      }
      response '200', 'appointment updated' do
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