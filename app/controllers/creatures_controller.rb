class CreaturesController < ApplicationController

def index
  @creatures = Creature.all
  render json: @creatures
end

def show
  @creature = Creature.find(params[:id])
  render json: @creature
end

end
