class InvoiceSequenceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :location_id, :location_name, :num_prefix, :next_num
end