<template>
  <div>
    <NavBar/>
    <ProfileContent/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProfileContent from '@/components/ProfileContent.vue'
export default {
  name: 'profile',
  components: {
    NavBar,
    ProfileContent
  }
}
</script>

<style>

</style>
