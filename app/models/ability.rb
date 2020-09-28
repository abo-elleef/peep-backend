class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :create, :read, :update, :destroy, :to => :crud
    if user.has_role? :owner
      can :manage, :all
    elsif user.has_role? :admin
      can :manage, :all
    end
    end
  end
