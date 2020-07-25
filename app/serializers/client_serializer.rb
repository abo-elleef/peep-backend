class ClientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :phone, :email, :notify_method, :language,
             :gender, :birthday, :notes, :global_notes, :street, :suburb, :city, :state,
             :postal_code
end
