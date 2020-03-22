class Thermostat
  attr_reader :temperature, :city

  def initialize(temperature:, city:)
    @temperature = temperature
    @city = city
  end

  def self.all
    DatabaseConnection.setup('thermostate')
    result = DatabaseConnection.query("SELECT * FROM thermo;")
    Thermostat.new(temperature: result[0]["temperature"], city: result[0]["city"])
    @temperature = result[0]["temperature"]
    @city = result[0]["city"]
    puts @temperature
    puts @city
    return [@temperature, @city]
  end

  def self.create(temperature:, city:)
    clearTable = DatabaseConnection.query(
      "TRUNCATE TABLE thermo;"
    )
    result = DatabaseConnection.query(
      "INSERT INTO thermo (temperature, city) VALUES('#{temperature}', '#{city}');"
    )
    Thermostat.new(temperature: temperature, city: city)
  end
end