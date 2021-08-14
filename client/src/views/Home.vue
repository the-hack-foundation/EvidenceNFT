<template>
  <div class="home">
    <Splash/>
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from '@/components/Splash.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Splash,
    About,
  }
}
</script>
