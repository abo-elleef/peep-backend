class StaffSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :phone, :email, :booking_enabled,
             :booking_color, :title, :notes, :contract_start, :contract_end, :product_comm,
             :discount_comm, :service_comm

  attribute :service_ids do |object, params|
    params[:show].present? ? object.service_ids : []
  end
  attribute :location_ids do |object, params|
    params[:show].present? ? object.location_ids : []
  end

  has_many :blocked_times, serializer: BlockedTimeSerializer

end
