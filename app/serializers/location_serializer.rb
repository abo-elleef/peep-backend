class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :business_type, :phone, :email, :street, :building, :city,
             :state, :zipcode, :next_num, :num_prefix, :created_at, :updated_at
end
