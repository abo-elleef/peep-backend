class InvoiceSequenceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :location_id, :num_prefix, :next_num
end