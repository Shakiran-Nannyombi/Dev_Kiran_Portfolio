<script>
import Layout from './components/Layout.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Layout,
    Navigation
  }
}
</script>

<template>
  <Layout>
    <Navigation />
    
    <!-- Router View -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </Layout>
</template>

<style>
/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
