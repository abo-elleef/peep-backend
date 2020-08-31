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

  #Show appointment
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
    post 'create an appointment record' do
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
                                  client_id: {type: :integer},
                                  service_name: {type: :integer},
                                  sellable_id: {type: :integer},
                                  sellable_type: {type: :string},
                                  sellable_name: {type: :string},
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
    put 'update an appointment record' do
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
                      cancellation_id: {type: :integer},
                      lines_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  id: {type: :integer},
                                  appointment_id: {type: :integer},
                                  staff_id: {type: :integer},
                                  staff_name: {type: :integer},
                                  service_id: {type: :integer},
                                  client_id: {type: :integer},
                                  service_name: {type: :integer},
                                  sellable_id: {type: :integer},
                                  sellable_type: {type: :string},
                                  sellable_name: {type: :string},
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

  #checkout
  path '/appointments/{id}' do
    put 'checkout an appointment ' do
      tags 'checkout appointments'
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
                                  id: {type: :integer},
                                  appointment_id: {type: :integer},
                                  staff_id: {type: :integer},
                                  staff_name: {type: :integer},
                                  service_id: {type: :integer},
                                  service_name: {type: :integer},
                                  sellable_id: {type: :integer},
                                  sellable_type: {type: :string},
                                  sellable_name: {type: :string},
                                  price: {type: :number},
                                  original_price: {type: :number},
                                  starts_at: {type: :string},
                                  ends_at: {type: :string}
                              }
                          }
                      },
                      payments_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  id: {type: :integer},
                                  appointment_id: {type: :integer},
                                  payment_type_id: {type: :integer},
                                  amount: {type: :number}
                              }
                          }
                      }

                  }
              }
          }
      }
      response '200', 'checkout completed' do
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

  #Check Hints
  path '/appointments/check_hints' do
    post 'check appointment hints' do
      tags 'appointments'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              location_id: {type: :integer},
              service_id: {type: :integer},
              staff_id: {type: :integer},
              duration: {type: :integer},
              starts_at: {type: :string}
          }
      }
      response '200', 'show hint' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'hint not found' do
        run_test!
      end
    end

  end
end
