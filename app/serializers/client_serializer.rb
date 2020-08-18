class ClientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :phone, :email, :notify_method, :language,
             :gender, :birthday, :notes, :global_notes, :street, :area, :block, :avenue, :building
end
