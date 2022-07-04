<template>
  <v-card color="#cbe6fd" max-width="500" elevation="5" class="card">
    <ChartModal :show="showChart" @close="closeChart" :cityName="cityName" :data="forecast"/>
    <div class="cityName" align="center">
      <span>{{ cityName }} - PE</span>
    </div>
    <div align="center">
      <div>{{ data.dt | date }}, <b>{{ data.weather[0].description }}</b></div>
    </div>
    <v-card-text>
      <v-row class="temperature">
        <v-col class="text-h2" cols="8">
          {{ data.main.temp | round }} &deg;C
        </v-col>
        <v-col cols="4">
          <v-img :src='getWeatherIcon(data.weather[0].icon)'></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <v-row class="card-btn">
      <v-col cols="6">
      <v-btn shaped large color="#297ac7" class="white--text" width="155" elevation="1" @click="openChart">
        <v-icon left>
          mdi-chart-line
        </v-icon>
        Ver Gráfico
      </v-btn>
      </v-col>
      <v-col cols="6">
      <v-btn shaped large color="error white--text" width="155" elevation="1" @click="handleDelete">
        <v-icon left>
          mdi-delete
        </v-icon>
        Deletar
      </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ChartModal from '@/components/ChartModal/ChartModal.vue';
import { getWeatherIcon, getCityForecast } from '@/services';
import moment from "moment";
moment.locale('pt-br');

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
      forecast: {
        temps: [],
        dates: [],
      }
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
    async fetchCityForecast() {
      const lon = this.data.coord?.lon;
      const lat = this.data.coord?.lat;
      const res = await getCityForecast(lat, lon);
      this.forecast.dates = res.data.daily.map(item => moment(item.dt*1000).format('DD/MM/YYYY'));
      this.forecast.temps = res.data.daily.map(item => item.temp.day);
    },
    getWeatherIcon,
  },
  filters: {
    round(value) {
      if (value === '--') {
        return value
      }
      return Math.round(value)
    },
    date(value) {
      if (value === '--') {
        return value
      }
      return moment(value*1000).format('LL')
    },
  },
  watch: {
    data(){          
      this.fetchCityForecast();
    }
  },
  mounted() {
    if(this.data.dt){
      this.fetchCityForecast();
    }
  },
}
</script>

<style scoped src="./style.css">
</style>