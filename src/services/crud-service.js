class CrudService {
  constructor(repository) {
    this.repository = repository
  }
  async create(data) {
    try {
      const response = await this.repository.create(data)
      return response
    } catch (error) {
      console.error("Error in CrudService while creating:", error)
      throw { error }
    }
  }
  async destroy(id) {
    try {
      const response = await this.repository.destroy(id)
      return response
    } catch (error) {
      console.error("Error in CrudService while destroying:", error)
      throw { error }
    }
  }
  async get(id) {
    try {
      const response = await this.repository.get(id)
      return response
    } catch (error) {
      console.error("Error in CrudService while fetching:", error)
      throw { error }
    }
  }
  async getAll() {
    try {
      const response = await this.repository.getAll()
      return response
    } catch (error) {
      console.error("Error in CrudService while fetching all:", error)
      throw { error }
    }
  }
  async update(id, data) {
    try {
      const response = await this.repository.update(id, data)
      return response
    } catch (error) {
      console.error("Error in CrudService while updating:", error)
      throw { error }
    }
  }
}

module.exports = CrudService
