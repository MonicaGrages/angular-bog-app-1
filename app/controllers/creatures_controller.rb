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

  def update
    @creature = Creature.find(params[:id])
    if @creature.update(creature_params)
      render json: @creature
    else
      render status: 500,
        json: {error: @creature.errors}
    end
  end

  def delete
    @creature = Creature.find(params[:id])
    if @creature.delete
      render json: {message: "creature was successfully deleted"}
    else
      render status: 500,
      json: {error: "error deleting creature with id "+@creature.id}
    end
  end

  private
  def creature_params
    params.require(:creature).permit(:name, :description)
  end

end
