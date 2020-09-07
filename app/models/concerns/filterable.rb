module Filterable
  extend ActiveSupport::Concern

  module ClassMethods
    def peep_filter(filtering_params)
      results = self.where(nil)
      filtering_params.each do |key, value|
        method_name = "by_#{key}"
        results = results.public_send(method_name, value) if value.present?# &&
            # self.respond_to?(method_name)
      end
      results
    end
  end
end
