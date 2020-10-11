class JoinTableLocationsAndInvoiceSequence < ActiveRecord::Migration[6.0]
  def change
    drop_table :invoice_sequences
    add_column :locations, :num_prefix, :string
    add_column :locations, :next_num, :integer
  end
end
