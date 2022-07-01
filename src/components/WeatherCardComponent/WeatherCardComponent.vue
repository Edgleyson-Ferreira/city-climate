<template>
  <v-card color="#cbe6fd" elevation="5">
    <ChartModal :show="showChart" @close="closeChart" />
    <v-btn @click="handleDelete">Deletar</v-btn>
    <v-btn @click="openChart">Ver gráfico</v-btn>
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
          {{ JSON.stringify(data) }}
        </v-col>
        <v-col cols="4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sun.png" alt="Sunny image" width="92"></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ChartModal from '@/components/ChartModal/ChartModal.vue';

  export default {
    name: 'WeatherCardComponent',
    components: {ChartModal},
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
        showChart: false,
      };
    },
    methods:{
      handleEnter: function(){
        this.$emit('handleEnter', this.localCityName);
      },
      handleDelete: function(){
        this.$emit('handleDelete', this.cityName);
      },
      openChart: function(){
       this.showChart = true;
      },
      closeChart: function(){
        this.showChart = false;
      },
    },
    created(){
      console.log(this.cityName);
    },
  }
</script>

<style scoped src="./style.css">

</style>