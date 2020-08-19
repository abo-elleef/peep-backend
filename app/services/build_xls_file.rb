class BuildXlsFile
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
      xls_package = Axlsx::Package.new
      xls_package.workbook.add_worksheet(:name => sheet_name) do |sheet|
        sheet.add_row data_attributes.keys
        data.map do |row_data|
          sheet.add_row data_attributes.values.map { |attr| row_data.send(attr) }
        end
      end
  end
end