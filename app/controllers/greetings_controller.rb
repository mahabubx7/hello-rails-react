class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: @greetings
  end

  def random_greeting
    @random_greeting = Greeting.order('RANDOM()').first
    render json: { message: @random_greeting.message }
  end
end
