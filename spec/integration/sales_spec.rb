require 'swagger_helper'

describe 'Reports Sales API' do
  # Transaction Summary Data
  path '/reports/sales/transaction_summary' do
    get 'get the transaction summary' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'Transaction Summary Data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  # Cash Movement Data
  path '/reports/sales/cash_movement' do
    get 'get the cash movement' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'Cash Movement Data' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  # Appointment List
  path '/reports/sales/appointments_list' do
    get 'get the appointments list' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'Appointment List' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  # Sales Grouping
  path '/reports/sales/sales_by_product' do
    get 'group sales by product' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'sales by product' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/reports/sales/sales_by_service' do
    get 'group sales by service' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'sales by service' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/reports/sales/sales_by_location' do
    get 'group sales by location' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'sales by location' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/reports/sales/sales_by_client' do
    get 'group sales by client' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'sales by client' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end

  path '/reports/sales/sales_by_staff' do
    get 'group sales by staff' do
      tags 'sales'
      consumes 'application/json'
      parameter name: :starts_at, in: :query, type: :string, required: true
      parameter name: :ends_at, in: :query, type: :string, required: true
      parameter name: :location_id, in: :query, type: :integer, required: false
      response '200', 'sales by staff' do
        run_test!
      end
      response '401', 'not authorized' do
        run_test!
      end
    end
  end
end
