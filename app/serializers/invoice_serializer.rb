class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :status, :sequence, :notes, :sub_total, :total, :balance,
             :client_id, :location_id, :client_name, :created_at, :updated_at, :tips_total, :location_name
  has_many :lines, serializer: LineSerializer
  has_many :tips, serializer: TipSerializer
  has_many :vouchers, serializer: VoucherSerializer
  has_many :payments, serializer: PaymentSerializer
  belongs_to :client

  def client_name
    object.client&.name
  end

  def location_name
    object.location&.name
  end

  def tips_total
    object.tips.map(&:value).sum
  end

end
