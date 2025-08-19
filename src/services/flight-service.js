const { FlightRepository, AirplaneRepository } = require("../respository/index")
const { compareTime } = require("../utils/helper")
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository()
    this.airplaneRepository = new AirplaneRepository()
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Departure time cannot be after arrival time" }
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      )
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      })
      return flight
    } catch (error) {
      console.error("Error in FlightService while creating flight:", error)
      throw { error }
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId)
      return flight
    } catch (error) {
      console.error("Error in FlightService while fetching flight:", error)
      throw { error }
    }
  }
  async getAllFlight(data) {
    try {
      const flights = await this.flightRepository.getAllFlight(data)
      return flights
    } catch (error) {
      console.error("Error in FlightService while fetching flight:", error)
      throw { error }
    }
  }
}

module.exports = FlightService
