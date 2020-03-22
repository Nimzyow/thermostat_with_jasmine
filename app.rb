require "sinatra"
require 'json/ext'

class ThermostatManager < Sinatra::Base
  
  enable :sessions, :method_override

  get "/" do
    puts "got to the get request"
  end

  post "/" do
    puts "got to the post request"
    @temperature = params[:temperature]
    puts "temperature is #{@temperature}"
  end

  run! if app_file == $PROGRAM_NAME
end