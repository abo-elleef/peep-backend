class ClientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :phone, :email, :notify_method, :language,
             :gender, :birthday, :notes, :global_notes, :address, :suburb, :city, :state,
             :postal_code
end
