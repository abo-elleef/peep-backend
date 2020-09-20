class SubscriptionsController < ApplicationController

  def index
    subscriptions = Subscription.peep_filter(params.slice(:name)).desc_order
    serializers = ActiveModel::Serializer::ArraySerializer.new(subscriptions, each_serializer: SubscriptionSerializer)
    render json: {data: serializers},  status: :ok
  end

  def show
    subscription = Subscription.find(params[:id])
    render json: {data: SubscriptionSerializer.new(subscription)}, status: :ok
  end

  def create
    subscription = Subscription.new(subscription_params)
    if subscription.save
      render json: {data: SubscriptionSerializer.new(subscription)}, status: :created
    else
      render json: subscription.errors, status: :unprocessable_entity
    end
  end

  def update
    subscription = Subscription.find(params[:id])

    if subscription.update(subscription_params)
      render json: {data: SubscriptionSerializer.new(subscription)}, status: :ok
    else
      render json: subscription.errors, status: :unprocessable_entity
    end
  end

  def destroy
    subscription = Subscription.find(params[:id])
    render json: {}, status:  subscription.destroy ? :ok : :bad_request
  end

  private

    def subscription_params
      params.require(:subscription).permit(
          :name, :desc, :starts_at, :ends_at, :pricing_type, :pricing_value,
          :available_for, :limit, service_price_ids: []
      )
    end
end
