class SupplierSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :desc, :first_name, :last_name, :email, :phone, :website, :area,
             :block, :avenue, :building, :street, :created_at, :updated_at
  attribute :assigned_products do |serializer|
    serializer.object.products.size
  end
end
