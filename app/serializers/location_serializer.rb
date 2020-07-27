class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :business_type, :phone, :email, :street, :building, :city,
             :state, :zipcode
end