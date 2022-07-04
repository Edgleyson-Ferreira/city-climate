<template>
  <div id="app">
    <HeaderComponent />
    <router-view path="$router.key" />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import './styles/global.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent/FooterComponent.vue';

document.title = "City Climate"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>