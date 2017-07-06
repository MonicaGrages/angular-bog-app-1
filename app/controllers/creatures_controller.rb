class CreaturesController < ApplicationController

  def index
    @creatures = Creature.all
    render json: @creatures
  end

  def show
    @creature = Creature.find(params[:id])
    render json: @creature
  end

  def create
    @creature = Creature.new(creature_params)
    if @creature.save
      render json: @creature
    else
      render status: 500,
        json: {error: @creature.errors}
    end
  end

  private
  def creature_params
    params.require(:creature).permit(:name, :description)
  end

end
