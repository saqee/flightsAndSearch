const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.price ||
    !req.body.arrivalTime ||
    !req.body.departureTime
  ) {
    return res.status(400).json({
      data: {},
      message: "Flight number, destination, and departure time are required.",
      err: "missing mandatory fields to create a flight",
    })
  }
  next()
}

module.exports = {
  validateCreateFlight,
}
