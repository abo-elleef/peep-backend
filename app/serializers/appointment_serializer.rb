class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :notes, :status,
             :client_id, :location_id, :start_time, :end_time, :details
end