require "sinatra" 
require 'json/ext'
require_relative "./libr/thermostat.rb"
require "./libr/database_connection.rb"

class ThermostatManager < Sinatra::Base
  
  enable :sessions, :method_override

  get "/thermostat" do
    puts "got to the get request"
    @thermostats = Thermostat.all
    puts "**--**"
    puts @thermostats
    {temperature: @thermostats[0], city: @thermostats[1]}.to_json
  end

  post "/thermostat" do
    DatabaseConnection.setup('thermostate')
    puts "got to the post request"
    @temperature = params[:temperature]
    @city = params[:city]
    puts "temperature is #{@temperature}"
    puts "city is #{@city}"
    Thermostat.create(temperature: params[:temperature], city: params[:city])
  end

  run! if app_file == $PROGRAM_NAME
end