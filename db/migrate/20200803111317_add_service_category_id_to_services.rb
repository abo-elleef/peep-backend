class AddServiceCategoryIdToServices < ActiveRecord::Migration[6.0]
  def change
    add_column :services, :service_category_id, :integer
    add_index  :services, :service_category_id
  end
end
