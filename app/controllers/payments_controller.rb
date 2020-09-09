class PaymentsController < ApplicationController

  def checkout
    invoice = InvoiceCreation.new(params).call
    items_types = params[:items].map { |item| item[:payable_type] }.uniq
    VoucherCreation.new(params[:items].select { |item| item[:payable_type] == "VoucherType" }, invoice.id) if items_types.include?('VoucherType')
    if items_types.include?('Line') && params[:invoiceable_type] != 'Appointment'
      #TODO  AppointmentCreation.new(params)
    end
    # TODO ProductProcessing.new(params) if items_types.include?('Product')
  end
end

# params = {
#     invoiceable_id: 1, # appointment, free sale
#     invoiceable_type: 'Appointment',
#     client_id: 1,
#     location_id: 1,
#     items: [
#         {
#             payable_id: 1,
#             payable_type: 'Product',
#             quantity: 2,
#             unit_price: 100,
#             original_price: 120,
#             staff_id: 1,
#         },
#         {
#             payable_id: 'line id',
#             payable_type: 'Line',
#             quantity: 1,
#             unit_price: 100,
#             original_price: 120,
#             staff_id: 1,
#         },
#         {
#             payable_id: 'voucher type id',
#             payable_type: 'VoucherType',
#             quantity: 1,
#             unit_price: 100,
#             original_price: 120,
#             staff_id: 1,
#         }
#     ],
#     payment_type: [
#         {
#             id: 1,
#             amount: '',
#         }
#     ],
#     tips: [
#         {
#             type: 'percentage', #percentage || value
#             value: 10,
#             staff_id: 1
#         }
#     ],
#     staff_id: 1, #recieved by
#     notes: ''
# }
