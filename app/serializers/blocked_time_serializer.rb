class BlockedTimeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_at, :end_at, :staff_id, :reason

  belongs_to :staff
end
