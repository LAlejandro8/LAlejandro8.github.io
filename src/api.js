import axios from 'axios'

const client = axios.create({
  baseURL: 'https://fly-away-acl.herokuapp.com/',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data
    })
  },
  getDestinos () {
    return this.execute('get', '/destinos')
  },
  getDestino (id) {
    return this.execute('get', `/destinos/${id}`)
  },
  createDestino (data) {
    return this.execute('post', '/destinos', data)
  },
  updateDestino (id, data) {
    return this.execute('put', `/destinos/${id}`, data)
  },
  deleteDestino (id) {
    return this.execute('delete', `/destinos/${id}`)
  },
  createCompraDestino (data) {
    return this.execute('post', '/tiquetes', data)
  },
  getTiquetes () {
    return this.execute('get', '/tiquetes')
  },
  deleteTiquete (id) {
    return this.execute('delete', `/tiquetes/${id}`)
  }
}
