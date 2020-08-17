class BlockedTimeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :starts_at, :ends_at, :staff_id, :reason

  belongs_to :staff
end
