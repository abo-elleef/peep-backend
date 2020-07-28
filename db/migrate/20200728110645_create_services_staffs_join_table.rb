class CreateServicesStaffsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :services, :staffs do |t|
      t.index [:service_id, :staff_id]
      t.index [:staff_id, :service_id]
    end
  end
end
