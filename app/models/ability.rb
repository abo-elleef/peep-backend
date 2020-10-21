class Ability
  include CanCan::Ability

  def initialize(user)
    can :manage, :all
    user ||= User.new
    # if user.has_role? :owner
    #   can :manage, :all
    # elsif user.has_role? :admin
    #   can :manage, :all
    # end
  end
end
