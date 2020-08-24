class ExportClients
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    send("build_#{@params[:export_type]}_file", fetch_clients)
  end

  private

  def fetch_clients
    @params[:location_ids].present? ? Client.where(location_id: params[:location_ids]) : Client.all
  end

  # def build_xlsx_file(clients)
  #   xlsx_package = Axlsx::Package.new
  #   xlsx_package.workbook.add_worksheet(:name => "Clients") do |sheet|
  #     sheet.add_row client_attributes.keys
  #     clients.map do |client|
  #       sheet.add_row client_attributes.values.map { |attr| client.send(attr) }
  #     end
  #   end
  # end

  def build_csv_file(clients)
    CSV.generate(headers: true) do |csv|
      csv << client_attributes.keys
      clients.map do |client|
        csv << client_attributes.values.map { |attr| client.send(attr) }
      end
    end
  end

  def client_attributes
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
        area: :area,
        block: :block,
        avenue: :avenue,
        building: :building,
        added_at: :created_at
    }
  end

end
