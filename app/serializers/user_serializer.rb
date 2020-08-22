class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email, :password_digest, :company_name,
             :business_type, :created_at, :updated_at
  has_many :locations, serializer: LocationSerializer

  attribute :token do |user|
    JwtService.encode(user)
  end
end
