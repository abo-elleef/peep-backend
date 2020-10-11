class LocationSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :business_type, :phone, :email, :street, :building, :area,
             :block, :avenue, :next_num, :num_prefix, :created_at, :updated_at, :address


  def address
    [object.area, object.block, object.avenue, object.street, object.building].compact.join(", ")
  end

end
