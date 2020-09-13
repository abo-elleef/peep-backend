module Reports
  class SalesController < ApplicationController

    def transaction_summary
      data = Reports::Sales::TransactionSummary.new(params).perform
      render json: {data: data}, status: :ok
    end

    def cash_movement
      data = Reports::Sales::CashMovement.new(params).perform
      render json: {data: data}, status: :ok
    end

    def appointments_list
      data = Reports::Sales::AppointmentsList.new(params).perform
      render json: {data: data}, status: :ok
    end

    #TODO add sales log endpoint
    def sales_by_product
      results = Reports::Sales::SalesReport.new(params).sales_by_product
      render json: {sales: results}, status: :ok
    end

    def sales_by_service
      results = Reports::Sales::SalesReport.new(params).sales_by_service
      render json: {sales: results}, status: :ok
    end

    def sales_by_location
      results = Reports::Sales::SalesReport.new(params).sales_by_location
      render json: {sales: results}, status: :ok
    end

    def sales_by_client
      results = Reports::Sales::SalesReport.new(params).sales_by_client
      render json: {sales: results}, status: :ok
    end

    def sales_by_staff
      results = Reports::Sales::SalesReport.new(params).sales_by_staff
      render json: {sales: results}, status: :ok
    end

    def recent_sales
      # TODO @monier we need to dynamic this values
      data = {
          appointment_count: 23,
          appointment_value: 1023,
          sales_value: 256,
          sales: [23, 45, 76, 12, 12, 78, 90],
          appointments: [23, 45, 76, 12, 12, 78, 90],
          days: (Date.today..(Date.today + 7.days)).map {|a| a.strftime("%Y-%m-%d")}
      }
      render json: {data: data}, status: :ok
    end

    def appointments
      lines = Line.preload(:staff, :sellable, appointment: :location).
          peep_filter(params.slice(:starts_at, :ends_at, :staff_ids, :location_ids))
      pagy, lines = pagy(lines, page: page_index, items: page_size )
      serializers = ActiveModel::Serializer::ArraySerializer.new(lines, serializer: LineSalesSerializer)
      render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok
    end

    def vouchers
      # TODO @monier we should return teh following data
      # {
      #     data: [
      #         {
      #             'issue_date': 'issue_date',
      #             'expiry_date': 'expiry_date',
      #             'invoice_number': 'invoice_number',
      #             'client': 'client',
      #             'status': 'status',
      #             'code': 'code',
      #             'total': 'total',
      #             'redeemed': 'redeemed',
      #             'remaining': 'remaining'
      #         }
      #     ]
      # }
      # lines = Line.preload(:staff, :sellable, appointment: :location).
      #     peep_filter(params.slice(:starts_at, :ends_at, :staff_ids, :location_ids))
      # pagy, lines = pagy(lines, page: page_index, items: page_size )
      # serializers = ActiveModel::Serializer::ArraySerializer.new(lines, serializer: LineSalesSerializer)
      # render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok
    end


    # def recent_sales
    #   results = Reports::Sales::RecentSalesReport.new(params).sales_by_staff
    #   render json: {sales: results}, status: :ok
    # end
  end
end