<template>
  <v-card color="#cbe6fd" max-width="500" elevation="5" class="card">
    <ChartModal :show="showChart" @close="closeChart" />

    <div class="text-h4">
      <span>{{ cityName }} - estado</span>
    </div>
    <div align="start">
      <v-div>Mon, 12:30 PM, descrição </v-div>
    </div>
    <v-card-text>
      <v-row class="temperature">
        <v-col class="text-h2" cols="8">
          23 &deg;C
        </v-col>
        <v-col cols="4">
          icone
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

export default {
  name: 'WeatherCardComponent',
  components: { ChartModal },
  props: {
    cityName: String,
    weather: {
      type: Object,
      require: true,
    },
    icon: String,
  },
  data() {
    return {
      showChart: false,

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
  },
}
</script>

<style scoped src="./style.css">
</style>