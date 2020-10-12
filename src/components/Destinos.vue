<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Destinos</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Vuelo</th>
              <th>Clase</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha vuelo</th>
              <th>Valor</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post._id">
              <td>{{ post.vuelo }}</td>
              <td>{{ post.clase }}</td>
              <td>{{ post.origen }}</td>
              <td>{{ post.destino }}</td>
              <td>{{ post.fecha_vuelo }}</td>
              <td>{{ post.valor }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(post)">Editar</a>
                -
                <a href="#" @click.prevent="deletePost(post._id)">Eliminar</a>
              </td>
              <td>
                <a href="#" @click.prevent="compraDestino(post)">Comprar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="model._id ? 'Editar destino' : 'Nuevo destino'">
          <form @submit.prevent="savePost">
            <b-form-group label="Vuelo">
              <b-form-input type="text" v-model="model.vuelo"></b-form-input>
            </b-form-group>
            <b-form-group label="Clase">
              <b-form-input type="text" v-model="model.clase"></b-form-input>
            </b-form-group>
            <b-form-group label="Origen">
              <b-form-input type="text" v-model="model.origen"></b-form-input>
            </b-form-group>
            <b-form-group label="Destino">
              <b-form-input type="text" v-model="model.destino"></b-form-input>
            </b-form-group>
            <b-form-group label="Fecha vuelo">
              <b-form-input type="date" v-model="model.fecha_vuelo"></b-form-input>
            </b-form-group>
            <b-form-group label="Valor">
              <b-form-input type="text" v-model="model.valor"></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Guardar destino</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      posts: [],
      model: {}
    }
  },
  async created () {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      this.model = await api.getDestinos()
      this.posts = this.model.destinos
      this.loading = false
    },
    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model._id) {
        console.log('Entrando a editar')
        await api.updateDestino(this.model._id, this.model)
      } else {
        await api.createDestino(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Esta seguro de eliminar este destino?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model._id === id) {
          this.model = {}
        }
        await api.deleteDestino(id)
        this.refreshPosts()
      }
    },
    async compraDestino (post) {
      post['nombre_pasajero'] = 'Alejandro Cortes'
      post['gate'] = '106'
      post['asiento'] = '23C'
      await api.createCompraDestino(post)
    }
  }
}
</script>
