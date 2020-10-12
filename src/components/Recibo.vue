<template>
  <div>
    <div class="cardWrap" v-for="post in posts" :key="post._id">
      <b-alert :show="loading" variant="info">Loading...</b-alert>
      <div class="card cardLeft" id="tiquete">
        <h6 id="text">Fly Away</h6>
        <div class="title">
          <b-container>
            <b-row>
              <b-col
                ><h6 id="setting">{{ post.origen }}</h6>
                <span id="normalize">origen</span></b-col>
              <b-col
                ><h6 id="setting">{{ post.destino }}</h6>
                <span id="normalize">destino</span></b-col>
            </b-row>
          </b-container>
        </div>
        <div class="name">
          <h6 id="setting">{{ post.nombre_pasajero }}</h6>
          <span id="normalize">nombre</span>
        </div>
        <div class="time">
          <h6 id="setting-date">{{ post.fecha_vuelo }}</h6>
          <span id="normalize">fecha - hora</span>
        </div>
      </div>
      <div class="card cardRight" id="tiquete">
        <div class="eye"><b-icon icon="lightning"></b-icon></div>
        <div class="number">
          <h6 id="text_right">{{ post.asiento }}</h6>
          <span id="normalize_right">asiento</span>
          <a id="cancel_ticket" href="#" @click.prevent="deletePost(post._id)">eliminar</a>
        </div>
        <div class="barcode"></div>
      </div>
    </div>
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
      this.model = await api.getTiquetes()
      this.posts = this.model.tiquetes
      this.loading = false
    },
    async deletePost (id) {
      if (confirm('Esta seguro de eliminar este tiquete?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model._id === id) {
          this.model = {}
        }
        await api.deleteTiquete(id)
        this.refreshPosts()
      }
    }
  }
}
</script>

<style>
.cardWrap {
  width: 27em;
  margin: 3em auto;
  color: #000;
  font-family: sans-serif;
}

#text {
  font-weight: bold;
  color: #fff;
}

#cancel_ticket{
  font-size: 12px;
}

#text_right {
  color: #e84c3d;
  margin: 0.5em 0 0 0;
  font-size: 1.5em;
  font-weight: bold;
}

#normalize {
  font-size: 0.7em;
  color: #a2aeae;
}

#normalize_right {
  display: block;
  color: #a2aeae;
  font-size: 0.7em;
}

#setting {
  font-size: 0.7em;
  color: #525252;
  margin: 0;
}

#setting-date {
  font-size: 0.7em;
  color: #525252;
  margin: 0.2em auto;
}

#tiquete {
  background: linear-gradient(
    to bottom,
    #e84c3d 0%,
    #e84c3d 26%,
    #ecedef 26%,
    #ecedef 100%
  );
  height: 11em;
  float: left;
  position: relative;
  padding: 1em;
  margin-top: 100px;
}

.cardLeft {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 16em;
  font-weight: bold;
}

.cardRight {
  width: 6.5em;
  border-left: 0.18em dashed #fff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.title,
.name,
.seat,
.time {
  text-transform: uppercase;
}

.title {
  margin: 0.2em 0 0 0;
}

.destino {

}

.name,
.seat {
  margin: 0.3em 0 0 0;
}

.time {
  margin: 0;
}

.seat,
.time {
  float: left;
}

.eye {
  position: relative;
  width: 2em;
  height: 1.5em;
  margin: 0 0 0 1.5em;
  z-index: 1;
  color: #fff;
}

.number {
  text-align: center;
  text-transform: uppercase;
}

.barcode {
  height: 2em;
  width: 0;
  margin: 0.5em 0 0 -0.5em;
  box-shadow: 1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434,
    11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434,
    22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434,
    30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434,
    41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434,
    51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434,
    64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434,
    74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;
}
</style>
