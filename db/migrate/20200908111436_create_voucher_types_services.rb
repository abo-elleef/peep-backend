class CreateVoucherTypesServices < ActiveRecord::Migration[6.0]
  def change
    create_join_table :voucher_types, :services do |t|
      t.index :voucher_type_id
      t.index :service_id
    end
  end
end
