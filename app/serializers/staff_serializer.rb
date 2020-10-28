class StaffSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :phone, :email, :booking_enabled,
             :booking_color, :title, :notes, :contract_start, :contract_end, :product_comm,
             :discount_comm, :service_comm, :service_ids, :location_ids, :title

  has_many :blocked_times, serializer: BlockedTimeSerializer


  def title
    object.name
  end
end
