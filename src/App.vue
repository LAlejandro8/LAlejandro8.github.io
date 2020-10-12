<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/"><b-icon icon="lightning"></b-icon> Fly Away</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/"><b-icon icon="house"></b-icon> Inicio</b-nav-item>
          <b-nav-item to="/destinos"><b-icon icon="map"></b-icon> Destinos</b-nav-item>
          <b-nav-item to="/tiquetes"><b-icon icon="receipt"></b-icon> Tiquetes</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
