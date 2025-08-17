const { CityService } = require("../services/index.js")

const cityService = new CityService()

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body)

    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created city",
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Successfully not created city",
      err: error,
    })
  }
}
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id)
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully delete city",
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Successfully not delete city",
      err: error,
    })
  }
}
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id)
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetch city",
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Successfully not get city",
      err: error,
    })
  }
}
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body)
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully update city",
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Successfully not update city",
      err: error,
    })
  }
}

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query)
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched all cities",
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Successfully not fetched all cities",
      err: error,
    })
  }
}

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
}
