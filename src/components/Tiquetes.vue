<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Tiquetes</h1>
    <Recibo />
  </div>
</template>

<script>
import Recibo from './Recibo'

export default {
  name: 'App',
  components: {
    Recibo
  }
}
</script>
