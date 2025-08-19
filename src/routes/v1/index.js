const express = require("express")
const CityController = require("../../controllers/city-controller.js")
const FlightController = require("../../controllers/flight-controller.js")
const AirportController = require("../../controllers/airport-controller.js")
const { FlightMiddleware } = require("../../middlewares/index.js")
const router = express.Router()
router.post("/city", CityController.create)
router.delete("/city/:id", CityController.destroy)
router.get("/city/:id", CityController.get)
router.get("/city", CityController.getAll)
router.put("/city/:id", CityController.update)

// Flight routes
router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  FlightController.create
)
router.get("/flights/:id", FlightController.get)
router.get("/flights", FlightController.getAll)

// Airport routes
router.post("/airports", AirportController.create)
router.get("/airports/:id", AirportController.get)
router.get("/airports", AirportController.getAll)
router.delete("/airports/:id", AirportController.destroy)
module.exports = router
