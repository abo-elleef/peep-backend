class TopStaffs

  def self.perform
    top_staffs = Line.during_current_month.select('count(*) as count, staff_name, staff_id ').group(:staff_id, :staff_name).order("count DESC").first(5)
    last_month = Time.current - 1.month
    top_staffs_last_month = Line.where(staff_id: top_staffs.pluck(:staff_id))
                                .where(updated_at: last_month.beginning_of_month..last_month.end_of_month)
                                .group(:staff_id).order("count_all DESC").count
     top_staffs.map do |line_data|
      {
          name: line_data.staff_name,
          current_month: line_data.count.nil? ? 0 : line_data.count,
          last_month: top_staffs_last_month[line_data.staff_id]
      }
    end
  end
end