<template>
  <div id="app">
    <HeaderComponent/>
    <router-view path="$router.key" />
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import './styles/global.css';
import HeaderComponent from './components/Header-component.vue';
import FooterComponent from './components/Footer-component.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>