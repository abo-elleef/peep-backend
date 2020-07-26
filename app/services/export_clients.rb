class ExportClients
  attr_reader :params
  def initialize(params)
    @params = params
  end

  def call
    clients = Client.all
    CSV.generate(headers: true) do |csv|
      csv << client_csv_attributes.keys

      clients.map do |client|
        csv << client_csv_attributes.values.map { |attr| client.send(attr) }
      end
    end
  end
  private
    def client_csv_attributes
      {
        first_name: :first_name,
        last_name: :last_name,
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