module ApplicationHelper

  def time_diff(seconds)
    "%02d h %02d m" % [seconds/3600%24, seconds/60%60]
  end
end