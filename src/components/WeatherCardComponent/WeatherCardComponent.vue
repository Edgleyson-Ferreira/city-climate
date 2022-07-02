<template>
  <v-card color="#cbe6fd" max-width="500" elevation="5" class="card">
    <ChartModal :show="showChart" @close="closeChart" />
    <div class="text-h4" align="center">
      <span>{{ cityName }} - PE</span>
    </div>
    <div align="center">
      <div>{{ date }}, <b>{{data.weather[0].description}}</b></div>
    </div>
    <v-card-text>
      <v-row class="temperature">
        <v-col class="text-h2" cols="8">
          {{data.main.temp | round}} &deg;C
        </v-col>
        <v-col cols="4">
          <v-img :src='getWeatherIcon(data.weather[0].icon)'></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="card-btn">
      <v-btn shaped large color="#297ac7" class="white--text" width="155" elevation="1" @click="openChart">
        <v-icon left>
          mdi-chart-line
        </v-icon>
        Ver Gráfico
      </v-btn>
      <v-btn shaped large color="error white--text" width="155" elevation="1" @click="handleDelete">
        <v-icon left>
          mdi-delete
        </v-icon>
        Deletar
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ChartModal from '@/components/ChartModal/ChartModal.vue';
import { getWeatherIcon } from '@/services'

export default {
  name: 'WeatherCardComponent',
  components: { ChartModal },
  props: {
    cityName: String,
    data: {
      type: Object,
      require: true,
    },
    icon: String,
  },
  data() {
    return {
      showChart: false,
      date: '',
    };
  },
  methods: {
    handleDelete: function () {
      this.$emit('handleDelete', this.cityName);
    },
    openChart: function () {
      this.showChart = true;
    },
    closeChart: function () {
      this.showChart = false;
    },
    showDate(dt){
      const test = new Date(dt*1000);
      this.date = test.toLocaleDateString("pt-BR")
    },
    getWeatherIcon,
  },
  filters:{
    round(value){
      if(value === "--"){
        return value
      }
      return Math.round(value)
    }
  },
  mounted(){
    this.showDate(this.data.dt);
  }
}
</script>

<style scoped src="./style.css">
</style>