class StaffsController < ApplicationController

  def index
    staffs = Staff.all
    render json: staffs, status: :ok, root: 'staffs', serializer: StaffSerializer
  end

  def show
    staff = Staff.find(staff_params[:id])
    render json: staff, status: :ok ,root: 'staff', serializer: StaffSerializer
  end

  def create
    staff = Staff.new(staff_params)
    if @staff.save
      render json: staff, status: :created ,root: 'staff', serializer: StaffSerializer
    else
      render json: staff.errors, status: :unprocessable_entity ,root: 'staffs',
             serializer: StaffSerializer
    end
  end

  def update
    staff = Staff.find(staff_params[:id])
    if staff.update(staff_params)
      render json: staff, status: :created ,root: 'staff', serializer: StaffSerializer
    else
      render json: staff.errors, status: :ok ,root: 'staffs',
             serializer: StaffSerializer
    end
  end

  def destroy
    staff = Staff.find(staff_params[:id])
    if staff.destroy
      render json: staff, status: :ok ,root: 'staff', serializer: StaffSerializer
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
