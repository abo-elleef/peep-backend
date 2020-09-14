require 'swagger_helper'

describe 'Invoices API' do
  # invoices index
  path '/invoices' do
    get 'Retrieves a set of invoices' do
      tags 'invoices'
      produces 'application/json'
      response '200', 'services set' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  #invoice show
  path '/invoices/{id}' do
    get 'show details of a invoice' do
      tags 'invoices'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      response '200', 'services data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
      response '404', 'services not found' do
        run_test!
      end
    end
  end

  #checkout invoice
  path '/checkout' do
    post 'checkout an invoice' do
      tags 'invoices'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              invoice: {
                  type: :object,
                  properties: {
                      status: {type: :integer},
                      client_id: {type: :integer},
                      location_id: {type: :integer},
                      staff_id: {type: :integer},
                      notes: {type: :text},
                      lines_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  sellable_id: {type: :integer},
                                  sellable_type: {type: :string},
                                  quantity: {type: :integer},
                                  unit_price: {type: :number},
                                  original_unit_price: {type: :number},
                                  staff_id: {type: :integer},
                                  starts_at: {type: :string},
                                  ends_at: {type: :string},
                              }
                          }
                      },
                      payments_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  payment_type_id: {type: :integer},
                                  amount: {type: :number}
                              }
                          }
                      },
                      tips_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  staff_id: {type: :integer},
                                  value: {type: :number}
                              }
                          }
                      }
                  }
              }
          }
      }
      response '201', 'checkout successfully' do
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

  #invoice payments update
  path '/invoices/{id}' do
    put 'update a invoice payments ' do
      tags 'invoices'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :params, in: :body, schema: {
          type: :object,
          properties: {
              invoice: {
                  type: :object,
                  properties: {
                      id: {type: :integer},
                      status: {type: :integer},
                      client_id: {type: :integer},
                      location_id: {type: :integer},
                      staff_id: {type: :integer},
                      notes: {type: :text},
                      payments_attributes: {
                          type: :array,
                          items: {
                              properties: {
                                  payment_type_id: {type: :integer},
                                  amount: {type: :number}
                              }
                          }
                      },
                  }
              }
          }
      }
      response '200', 'Invoice updated' do
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
