class ExportXlsClients
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    build_file(fetch_clients)
  end

  private

  def fetch_clients
    params[:location_ids].present? ? Client.where(location_id: params[:location_ids]) : Client.all
  end

  def build_file(clients)
    xls_package = Axlsx::Package.new
    xls_package.workbook.add_worksheet(:name => "Clients") do |sheet|
      sheet.add_row client_xls_attributes.keys
      clients.map do |client|
        sheet.add_row client_xls_attributes.values.map { |attr| client.send(attr) }
      end
    end

  end

  def client_xls_attributes
    {
        id: :id,
        first_name: :first_name,
        last_name: :last_name,
        name: :name,
        phone: :phone,
        email: :email,
        language: :language,
        gender: :gender,
        birthday: :birthday,
        notes: :notes,
        street: :street,
        suburb: :suburb,
        city: :city,
        state: :state,
        postal_code: :postal_code,
        added_at: :created_at,
    }
  end

end
