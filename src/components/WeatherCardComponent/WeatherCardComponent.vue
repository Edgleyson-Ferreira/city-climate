<template>
  <v-card color="#cbe6fd" elevation="5">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ cityName }} - {{ weather.estate }}
        </v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, {{ weather.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text >
      <v-row class="temperature">      
        <v-col class="text-h2" cols="8">
          {{ weather.temperature }}&deg;C
        </v-col>
        <v-col cols="4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sun.png" alt="Sunny image" width="92"></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'WeatherCardComponent',
    props:{
        cityName: String,
        data: Object,
    },
    data(){
      return {
        weather: {
          cityName: 'Cidade',
          estate: 'PE',
          description: 'Ensolarado',
          temperature: '23',
        },
      };
    },
    methods:{
      handleEnter: function(){
        this.$emit('handleEnter', this.localCityName);
      }
    },
    created(){
      console.log(this.cityName);
    },
  }
</script>

<style scoped src="./style.css">

</style>