const { AirportService } = require("../services/index")
const airportService = new AirportService()
const create = async (req, res) => {
  try {
    const result = await airportService.create(req.body)
    return res.status(201).json({
      success: true,
      message: "Airport created successfully",
      data: result,
    })
  } catch (error) {
    console.error("Error in create airport controller:", error)
    res.status(500).send({ error: "Internal Server Error" })
  }
}

const get = async (req, res) => {
  try {
    const result = await airportService.get(req.params.id)
    return res.status(201).json({
      success: true,
      message: "Airport get successfully",
      data: result,
    })
  } catch (error) {
    console.error("Error in create airport controller:", error)
    res.status(500).send({ error: "Internal Server Error" })
  }
}
const destroy = async (req, res) => {
  try {
    const result = await airportService.destroy(req.params.id)
    return res.status(201).json({
      success: true,
      message: "Airport delete successfully",
    })
  } catch (error) {
    console.error("Error in create airport controller:", error)
    res.status(500).send({ error: "Internal Server Error" })
  }
}

const getAll = async (req, res) => {
  try {
    const result = await airportService.getAll()
    return res.status(201).json({
      success: true,
      data: result,
      message: "Airport fetch successfully",
    })
  } catch (error) {
    console.error("Error in create airport controller:", error)
    res.status(500).send({ error: "Internal Server Error" })
  }
}
module.exports = {
  create,
  get,
  destroy,
  getAll,
}
