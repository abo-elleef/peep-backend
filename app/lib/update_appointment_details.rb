class UpdateAppointmentDetails
  def initialize(params)
    @params = params
    @appointment = appointment
  end

  def call
    iterate_params
    @appointment.save!
  end

  private

  def appointment
    Appointment.find(@params[:id])
  end

  def iterate_params
    params = @params.delete('id')
    params.each do |key1, value1|
      if key1 == 'services'
        iterate_services(key1, value1)
      else
        @appointment.details[key1] = (value1 || @appointment.details[key1])
      end
    end
  end

  def iterate_services(key1, value1)
    value1.each_with_index do |key2, value2|
      value2.each do |key3, value3|
        @appointment.details[key1][key2][key3] = (value3 || @appointment.details[key1][key2][key3])
      end
    end
  end
end