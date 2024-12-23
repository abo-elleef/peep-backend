class TipSerializer < ActiveModel::Serializer
  attributes :id, :value, :staff_id, :invoice_id
  attribute :staff_name do |serializer|
    serializer.object.staff.try(:name)
  end
end
