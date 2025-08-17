const { City } = require("../models/index")

class CityRepository {
  async createCity({ name }) {
    console.log(name)

    try {
      const city = await City.create({ name })
      return city
    } catch (error) {
      console.log("some error occurred while creating city", error)
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: { id: cityId },
      })
      return true
    } catch (error) {
      log("some error occurred while deleting city", error)
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: { id: cityId },
      })
      return city
    } catch (error) {
      log("some error occurred while deleting city", error)
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findOne({
        where: { id: cityId },
      })
      return city
    } catch (error) {
      log("some error occurred while deleting city", error)
    }
  }
  async getAllCities() {
    try {
      const cities = await City.findAll()
      return cities
    } catch (error) {
      console.log("some error occurred while fetching all cities", error)
    }
  }
}

module.exports = CityRepository
