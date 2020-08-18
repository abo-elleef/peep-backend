class SupplierSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :desc, :first_name, :last_name, :email, :phone, :website, :area,
             :block, :avenue, :building
end
