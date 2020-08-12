class StaffsController < ApplicationController
  # before_action :peep_authenticate

  def index
    staffs = current_location.staffs
    render json: StaffSerializer.new(staffs, include: [:blocked_times]), status: :ok
  end

  def show
    staff = Staff.find(params[:id])
    render json: StaffSerializer.new(staff, {params: {show: true}, include: [:blocked_times]}), status: :ok
  end

  def create
    staff = Staff.new(staff_params)
    if staff.save
      render json: StaffSerializer.new(staff), status: :created
    else
      render json: staff.errors, status: :unprocessable_entity
    end
  end

  def update
    staff = Staff.find(params[:id])
    if staff.update(staff_params)
      render json: StaffSerializer.new(staff), status: :created
    else
      render json: staff.errors, status: :ok
    end
  end

  def destroy
    staff = Staff.find(params[:id])
    status = staff.destroy ? :ok : :bad_request
    render json: {}, status: status
  end

  private
    def staff_params
      params.require(:staff).permit(
        :id, :first_name, :last_name, :phone, :email, :booking_enabled, :booking_color,
        :title, :notes, :contract_start, :contract_end,:product_comm, :discount_comm,
        :service_comm, service_ids: [], location_ids: []
      )
    end
end
