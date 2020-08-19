class BuildCsvFile
  attr_reader :sheet_name, :data, :data_attributes

  def initialize(sheet_name, data, data_attributes)
    @sheet_name = sheet_name
    @data = data
    @data_attributes = data_attributes
  end

  def call
    build_file
  end

  private

  def build_file
    CSV.generate(headers: true) do |csv|
      csv << data_attributes.keys
      data.map do |row_data|
        csv << data_attributes.values.map { |attr| row_data.send(attr) }
      end
    end
  end
end