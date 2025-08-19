const { Flights } = require("../models/index")
const { Op, where } = require("sequelize")
class FlightRepository {
  #createFilter(data) {
    let filter = {}
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId
    }
    const priceFilter = []
    if (data.minprice && data.maxprice) {
      /* Object.assign(filter, {
        price: {
          [Op.and]: [
            { price: { [Op.lte]: data.minprice } },
            { price: { [Op.maxprice]: maxprice } },
          ],
        },
      }) */
    }
    if (data.minprice) {
      //Object.assign(filter, { price: { [Op.gte]: data.minprice } })
      priceFilter.push({ price: { [Op.gte]: data.minprice } })
    }
    if (data.maxprice) {
      //Object.assign(filter, { price: { [Op.lte]: data.maxprice } })
      priceFilter.push({ price: { [Op.lte]: data.maxprice } })
    }
    Object.assign(filter, priceFilter)
    return filter
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data)
      return flight
    } catch (error) {
      console.error("Error creating flight:", error)
      throw { error }
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId)
      return flight
    } catch (error) {
      console.error("Error fewtch flight:", error)
      throw { error }
    }
  }

  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFilter(filter)
      const flight = await Flights.findAll({ where: filterObject })
      return flight
    } catch (error) {
      console.error("Error all flight:", error)
      throw { error }
    }
  }
}

module.exports = FlightRepository
