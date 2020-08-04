class Service < ApplicationRecord
  include Filterable
  enum available_for: {everyone: 0, males: 1, females: 2}
  enum extra_time_type: {processing_after: 0, blocking_after: 1}

  has_and_belongs_to_many :staffs
  belongs_to :service_category
  scope :filter_by_name, -> (name) { where name: name }

  def self.default_data
    [
        {
            name: "Hair Cut",
            treatment_type_id: 1, # TreatmentType.first.id
            description: "wonder fancy Hair Cut",
            available_for: 0,
            staff_commission: true,
            extra_time: false
        },
        {
            name: "Hair Coloring",
            treatment_type_id: 1, # TreatmentType.first.id
            description: "wonder fancy Hair Coloring",
            available_for: 0,
            staff_commission: true,
            extra_time: false
        }
    ]
  end
end
