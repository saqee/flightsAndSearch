const CrusService = require("./crud-service")
const { AirportRepository } = require("../respository/index")
class AirportService extends CrusService {
  constructor() {
    const airportRepository = new AirportRepository()
    super(airportRepository)
  }
}

module.exports = AirportService
