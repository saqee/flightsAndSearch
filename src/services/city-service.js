const { CityRepository } = require("../respository/index")

class CityService {
  constructor() {
    this.cityRepository = new CityRepository()
  }
  async createCity(data) {
    const city = await this.cityRepository.createCity(data)
    return city
  }
  async deleteCity(cityId) {
    const response = await this.cityRepository.deleteCity(cityId)
    return response
  }
  async updateCity(cityId, data) {
    const city = await this.cityRepository.updateCity(cityId, data)
    return city
  }
  async getCity(cityId) {
    const city = await this.cityRepository.getCity(cityId)
    return city
  }

  async getAllCities(filter) {
    const cities = await this.cityRepository.getAllCities({ name: filter.name })
    return cities
  }
}

module.exports = CityService
