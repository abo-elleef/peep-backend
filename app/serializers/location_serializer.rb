class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :business_type, :phone, :email, :street, :building, :city,
             :state, :zipcode
end
