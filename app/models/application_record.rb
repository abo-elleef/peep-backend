class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  scope :desc_order, -> { order(updated_at: :desc) }
end
