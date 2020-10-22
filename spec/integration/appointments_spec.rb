require 'swagger_helper'

describe 'Appointments API' do
  let!(:user) { create(:user) }
  let!(:test_user) { create(:user) }
  let(:headers) { request_headers(user) }
  #Appointments Index
  path '/appointments' do
    get 'Retrieves a set of appointments' do
      tags 'appointments'
      produces 'application/json'
      parameter name: 'Authorization', :in => :header, :type => :string
      response '200', 'appointments set' do
        let(:"Authorization") { "#{issue_token({user_id: user.id})}" }
        run_test!
      end
      response '401', 'not authorized' do
        let(:"Authorization") { "#{issue_token({user_id: test_user.id})}" }
        run_test!
      end
    end
  end

  # #Show appointment
  # path '/appointments/{id}' do
  #   get 'show details of a appointment' do
  #     tags 'appointments'
  #     produces 'application/json'
  #     security [JWT: {}]
  #     parameter name: :id, in: :path, type: :integer
  #     response '200', 'appointments data' do
  #       let(:"Authorization") { "#{RequestsHelper::issue_token({user_id: user.id})}" }
  #       run_test!
  #     end
  #     response '401', 'not authorized' do
  #       run_test!
  #     end
  #     response '404', 'appointments not found' do
  #       run_test!
  #     end
  #   end
  # end
  #
  # #Delete appointment
  # path '/appointments/{id}' do
  #   delete 'delete appointment' do
  #     tags 'appointments'
  #     produces 'application/json'
  #     parameter name: :id, in: :path, type: :integer
  #     response '200', 'appointments data' do
  #       run_test!
  #     end
  #     response '401', 'not authorized' do
  #       run_test!
  #     end
  #     response '404', 'appointment not found' do
  #       run_test!
  #     end
  #     response '442', 'can not be deleted' do
  #       run_test!
  #     end
  #   end
  # end
  #
  # #Create appointment
  # path '/appointments' do
  #   post 'create an appointment record' do
  #     tags 'appointments'
  #     consumes 'application/json'
  #     parameter name: :params, in: :body, schema: {
  #         type: :object,
  #         properties: {
  #             appointment: {
  #                 type: :object,
  #                 properties: {
  #                     status: {type: :integer},
  #                     client_id: {type: :integer},
  #                     location_id: {type: :integer},
  #                     notes: {type: :string},
  #                     date: {type: :string},
  #                     appointment_services_attributes: {
  #                         type: :array,
  #                         items: {
  #                             properties: {
  #                                 appointment_id: {type: :integer},
  #                                 staff_id: {type: :integer},
  #                                 service_id: {type: :integer},
  #                                 service_price_id: {type: :integer},
  #                                 starts_at: {type: :string},
  #                                 ends_at: {type: :string}
  #                             }
  #                         }
  #                     },
  #                 }
  #             }
  #         }
  #     }
  #     response '201', 'appointment created' do
  #       run_test!
  #     end
  #     response '401', 'not authorized' do
  #       run_test!
  #     end
  #     response '442', 'bad data or breaks validation ' do
  #       run_test!
  #     end
  #   end
  # end
  #
  # #Update appointment
  # path '/appointments/{id}' do
  #   put 'update an appointment record' do
  #     tags 'appointments'
  #     consumes 'application/json'
  #     parameter name: :id, in: :path, type: :integer
  #     parameter name: :params, in: :body, schema: {
  #         type: :object,
  #         properties: {
  #             appointment: {
  #                 type: :object,
  #                 properties: {
  #                     status: {type: :integer},
  #                     client_id: {type: :integer},
  #                     location_id: {type: :integer},
  #                     notes: {type: :string},
  #                     date: {type: :string},
  #                     cancellation_id: {type: :integer},
  #                     appointment_services_attributes: {
  #                         type: :array,
  #                         items: {
  #                             properties: {
  #                                 id: {type: :integer},
  #                                 appointment_id: {type: :integer},
  #                                 staff_id: {type: :integer},
  #                                 service_id: {type: :integer},
  #                                 service_price_id: {type: :integer},
  #                                 starts_at: {type: :string},
  #                                 ends_at: {type: :string}
  #                             }
  #                         }
  #                     }
  #                 }
  #             }
  #         }
  #     }
  #     response '200', 'appointment updated' do
  #       run_test!
  #     end
  #     response '401', 'not authorized' do
  #       run_test!
  #     end
  #     response '442', 'bad data or breaks validation ' do
  #       run_test!
  #     end
  #   end
  # end
  #
  # #Check Hints
  # path '/appointments/check_hints' do
  #   post 'check appointment hints' do
  #     tags 'appointments'
  #     consumes 'application/json'
  #     parameter name: :params, in: :body, schema: {
  #         type: :object,
  #         properties: {
  #             location_id: {type: :integer},
  #             service_id: {type: :integer},
  #             staff_id: {type: :integer},
  #             duration: {type: :integer},
  #             starts_at: {type: :string}
  #         }
  #     }
  #     response '200', 'show hint' do
  #       run_test!
  #     end
  #     response '401', 'not authorized' do
  #       run_test!
  #     end
  #     response '404', 'hint not found' do
  #       run_test!
  #     end
  #   end
  #
  # end
end
