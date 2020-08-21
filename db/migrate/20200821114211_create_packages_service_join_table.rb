class CreatePackagesServiceJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :packages, :services do |t|
      t.index [:package_id, :service_id]
      t.index [:service_id, :package_id]
    end
  end
end
