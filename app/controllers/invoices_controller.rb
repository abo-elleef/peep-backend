class InvoicesController < ApplicationController
  layout "forms", only: :new
  def index
    invoices = Invoice.preload(:location).peep_filter(params.slice(:location_id, :starts_at, :ends_at, :search))
    pagy, invoices = pagy(invoices, page: page_index, items: page_size)
    serializers = ActiveModel::Serializer::ArraySerializer.new(invoices, each_serializer: InvoiceSerializer)
    render json: {data: serializers, meta: pagy_meta_data(pagy)}, status: :ok
  end

  def show
    invoice = Invoice.find(params[:id])
    respond_to do |format|
      format.html { @invoice = invoice}
      format.json {
        render json: {data: InvoiceSerializer.new(invoice)}, status: :ok
      }
    end

  end

  def new
    @appointment = Appointment.find params[:appointment_id]
    # if @appointment.invoice.present?
    #   redirect_to @appointment.invoice
    # else
      @staff = Staff.all.map{|s| [s.name, s.id]}
    @products = Product.all
      @discounts = Discount.all.map{|s| [s.name, s.id]}.unshift(['No Discount', nil])
      @invoice = Invoice.new({
                                 location_id: @appointment.location_id,
                                 client_id: @appointment.client_id
                             })

      @appointment.appointment_services.map do |appointment_service|
        line = @invoice.lines.build({sellable_type: 'ServicePrice', sellable_id: appointment_service.service_price_id, staff_id: appointment_service.staff_id, unit_price: appointment_service.service_price.price, original_unit_price: appointment_service.service_price.price, quantity: 1, starts_at: appointment_service.starts_at, ends_at: appointment_service.ends_at })
        line.build_discount_usage
      end
    @invoice.balance = @invoice.total = @invoice.sub_total = @appointment.total_price
      # @invoice.tips.build({value: 16})
    # end
  end

  def checkout
    invoice_values = Checkout::InvoiceCalculation.perform(invoice_params)
    invoice = Invoice.new(invoice_params.merge(
        sequence: Invoice.next_sequence(invoice_params[:location_id]), sub_total: invoice_values[:total],
        total: invoice_values[:total], balance: invoice_values[:balance])
    )
    if invoice.save!
      appointment = Appointment.find(params[:appointment_id])
      appointment.invoice_id = invoice.id
      appointment.status = 5
      appointment.save!
      lines_types = invoice_params[:lines_attributes].values.map { |line| line[:sellable_type] }.uniq
      # TODO voucher wil be in phase 2
      # Checkout::VoucherCreation.new(params[:lines_attributes].select { |line| line[:sellable_type] == 'VoucherType' }, invoice.id).call if lines_types.include?('VoucherType')
      Checkout::AppointmentCreation.new(invoice_params).perform if lines_types.include?('ServicePrice') || params[:appointment_id].present?
      # TODO ProductProcessing.new(params) if items_types.include?('Product')
      redirect_to invoice
    else
      render json: invoice.errors, status: :unprocessable_entity
    end
  end

  alias :create :checkout

  # TODO: remove it after remove FE completely
  # update just in case of the new payment
  def update
    invoice = Invoice.find(params[:id])
    update_invoice_payment(invoice.id, params[:payments])
    invoice.status = params[:status]
    if invoice.save
      render json: {data: InvoiceSerializer.new(invoice)}, status: :ok
    else
      render json: invoice.errors, status: :unprocessable_entity
    end
  end

  private

  def invoice_params
    params.require(:invoice).permit(
        :sequence, :notes, :client_id, :location_id, :sub_total, :total, :balance, :staff_id,
        lines_attributes: [:id, :invoice_id, :staff_id,
                           :sellable_id, :sellable_type, :sellable_name, :unit_price,
                           :original_unit_price, :starts_at, :ends_at, :quantity,
                           discount_usage_attributes: :discount_id],
        payments_attributes: [:id, :invoice_id, :payment_type_id, :amount],
        tips_attributes: [:id, :staff_id, :value, :_destroy])
  end

  def update_invoice_payment(invoice_id, payments)
    new_payments = payments.select { |payment| !payment[:id].present? }
    new_payments.map do |payment|
      Payment.create!(invoice_id: invoice_id, payment_type_id: payment[:payment_type_id], amount: payment[:amount], staff_id: payment[:staff_id])
    end
  end
end