class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :company_name,
             :business_type, :created_at, :updated_at
  has_many :locations, serializer: LocationSerializer

  attribute :token do |serializer|
    JwtService.encode(serializer.object)
  end
end
