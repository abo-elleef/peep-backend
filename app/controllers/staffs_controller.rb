class StaffsController < ApplicationController

  def index
    staffs = Staff.all
    render json: StaffSerializer.new(staffs), status: :ok
  end

  def show
    staff = Staff.find(params[:id])
    render json: StaffSerializer.new(staff), status: :ok
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
    if staff.destroy
      render json: StaffSerializer.new(staff), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private
    def staff_params
      params.require(:staff).permit(
        :id, :first_name, :last_name, :phone, :email, :booking_enabled, :booking_color,
        :title, :notes, :contract_start, :contract_end
      )
    end
end
