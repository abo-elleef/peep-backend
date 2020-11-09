class StaffsController < ApplicationController
  # before_action :peep_authenticate
  layout :resolve_layout

  def index
    @staffs = Staff.preload(:blocked_times).peep_filter(params.slice(:search)).all
    # serializers = ActiveModel::Serializer::ArraySerializer.new(staffs, each_serializer: StaffSerializer)
    # render json: {data: serializers},  status: :ok
  end

  def new
    @staff = Staff.new
    init_data
  end

  def edit
    @staff = Staff.find params[:id]
    init_data
  end

  def top
    data = TopStaffs.perform
    render json: {data: data}, status: :ok
  end

  def calendar
    data = Staff.all.map do |s|
      {id: s.id, title: s.name}
    end
    render json: data, status: :ok
  end

  def show
    staff = Staff.find(params[:id])
    render json: {data: StaffSerializer.new(staff)}, status: :ok
  end

  def create
    staff = Staff.new(staff_params)
    if staff.save
      # TODO: create working hours if staff is booking_enabled
      redirect_to staffs_path
      # render json: {data: StaffSerializer.new(staff)}, status: :created
    else
      render json: staff.errors, status: :unprocessable_entity
    end
  end

  def update
    staff = Staff.find(params[:id])
    if staff.update(staff_params)
      redirect_to staffs_path
      # render json: {data: StaffSerializer.new(staff)}, status: :created
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
        :title, :notes, :contract_start, :contract_end, :product_comm, :discount_comm,
        :service_comm, service_ids: [], location_ids: []
    )
  end

  def resolve_layout
    case action_name
    when "new", "edit", 'create', 'update'
      "forms"
    else
      "dash"
    end
  end
  def init_data
    @locations = Location.all
    @service_prices = Service.all
  end
end
