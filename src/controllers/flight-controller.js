const { FlightService } = require("../services/index")

const flightService = new FlightService()

const create = async (req, res) => {
  try {
    /* cont flightData={
      flightNumber: req.body.flightNumber,
   ei vabe patano dorkar
    } */
    const flight = await flightService.createFlight(req.body)
    return res.status(201).json({
      message: "Flight created successfully",
      data: flight,
      success: true,
    })
  } catch (error) {
    console.error("Error in FlightController while creating flight:", error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
const get = async (req, res) => {
  const flightId = req.params.id
  const flight = await flightService.getFlight(flightId)
  if (!flight) {
    return res.status(404).json({ error: "Flight not found" })
  }
  return res.status(200).json({
    message: "Flight fetched successfully",
    data: flight,
  })
}

const getAll = async (req, res) => {
  //const flightId = req.params.id
  const flight = await flightService.getAllFlight(req.query)

  return res.status(200).json({
    message: "Flight fetched successfully",
    data: flight,
  })
}

module.exports = {
  create,
  get,
  getAll,
}
