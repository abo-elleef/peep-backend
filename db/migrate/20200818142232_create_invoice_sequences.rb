class CreateInvoiceSequences < ActiveRecord::Migration[6.0]
  def change
    create_table :invoice_sequences do |t|
      t.integer :location_id
      t.string :location_name
      t.string :num_prefix
      t.integer :next_num
      t.timestamps
    end
  end
end
