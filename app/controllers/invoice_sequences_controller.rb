class InvoiceSequencesController < ApplicationController

  def index
    invoice_sequences = InvoiceSequence.all
    render json: InvoiceSequenceSerializer.new(invoice_sequences), status: :ok
  end

  def show
    invoice_sequence = InvoiceSequence.find(params[:id])
    render json: InvoiceSequenceSerializer.new(invoice_sequence), status: :ok
  end

  def create
    invoice_sequence = InvoiceSequence.new(invoice_sequence_params)
    if invoice_sequence.save
      render json: InvoiceSequenceSerializer.new(invoice_sequence), status: :created
    else
      render json: invoice_sequence.errors, status: :unprocessable_entity
    end
  end

  def update
    invoice_sequence = InvoiceSequence.find(params[:id])
    if invoice_sequence.update(invoice_sequence_params)
      render json: InvoiceSequenceSerializer.new(invoice_sequence), status: :ok
    else
      render json: invoice_sequence.errors, status: :unprocessable_entity
    end
  end

  def destroy
    invoice_sequence = InvoiceSequence.find(params[:id])
    if invoice_sequence.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def invoice_sequence_params
    params.require(:invoice_sequence).permit(:location_id, :num_prefix, :next_num)
  end
end