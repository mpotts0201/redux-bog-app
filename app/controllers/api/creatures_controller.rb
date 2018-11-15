class Api::CreaturesController < ApplicationController
    # before_action :authenticate_user!

    def index 
        # @creatures = current_user.creatures
        @creatures = Creature.all
        render json: @creatures
    end 

end
