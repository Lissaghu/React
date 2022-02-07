import axios from "axios"

const baseUrl = process.env.REACT_APP_MOCKAPI

export const usersAPI = {
  async getUsers() {
    return await axios.get(baseUrl)
  },
  async setUsers(firstName, lastName) {
    return await axios.post(baseUrl, {
      firstName,
      lastName
    })
  }
}