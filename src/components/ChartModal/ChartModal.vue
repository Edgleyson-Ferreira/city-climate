<template>
  <v-row justify="center">
    <v-dialog class="dialog" width="70%" v-model="dialog" persistent @click:outside="handleClose">
      <v-card class="card pb-5">
        <v-card-title>
          <v-container>
            <span class="card-title text-h5">Gráfico de {{ cityName }}</span>
          </v-container>
        </v-card-title>
        <v-card-text>
          <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CityModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      require: true,
    },
    cityName: String
  },
  data: () => ({
    dialog: false,
    series: [{
      name: "Temperatura (°C)",
      data: [18, 20, 19, 22]
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Previsão do tempo por dia',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Seg', 'Ter', 'Qua', 'Qui'],
      }
    },
  }),
  watch: {
    show(newValue) {
      this.dialog = newValue;
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
  mounted() {
    this.dialog = this.show;
  },
}

</script>

<style scoped src="./style.css">
</style>