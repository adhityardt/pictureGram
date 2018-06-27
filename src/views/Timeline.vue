<template>
  <div>
    <NavBar/>
    <Content/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Content from '@/components/Content.vue'
export default {
  name: 'timeline',
  components: {
    NavBar,
    Content
  }
}
</script>

<style>

</style>
