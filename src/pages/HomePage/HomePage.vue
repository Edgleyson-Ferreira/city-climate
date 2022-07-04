<template>
    <main>
        <div class="options">            
            <div class="search">
                <v-text-field v-model="search" hide-no-data hide-details label="Nome da cidade" solo>
                    <v-icon slot="append" color="gray">
                        mdi-magnify
                    </v-icon>
                </v-text-field>
            </div>
            <div>
                <v-btn shaped large class="btn" color="success white--text" width="250px" elevation="1" @click="openModal">
                    <v-icon left>
                        mdi-plus
                    </v-icon>
                    Adicionar cidade
                </v-btn>
            </div>
        </div>
        <div class="cities ">
            <div class="city" v-for="(city, index) in filteredCities" :key="index">
                <WeatherCardComponent :cityName="city.name" :data="city.data" @handleDelete="deleteCity" />
            </div>
        </div>
        <CityModal :show="showModal" @close="closeModal" @confirm="addCity" />
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";
import { getCityWeather } from "@/services"
import CityModal from '@/components/CityModal/CityModal.vue';

export default {
    name: "HomePage",
    components: { WeatherCardComponent, CityModal},
    data() {
        return {
            search: '',
            cities: [
                { data: {main: {temp: "--"}, weather: [{description: "--", icon: '04d'}]}, name: 'Garanhuns' },
                { data: {main: {temp: "--"}, weather: [{description: "--", icon: '04d'}]}, name: 'Caruaru' },
                { data: {main: {temp: "--"}, weather: [{description: "--", icon: '04d'}]}, name: 'Recife' },
                { data: {main: {temp: "--"}, weather: [{description: "--", icon: '04d'}]}, name: 'Palmeirina' },
                { data: {main: {temp: "--"}, weather: [{description: "--", icon: '04d'}]}, name: 'Lajedo' },
            ],
            showModal: false,
            showChart: false,
        };
    },
    methods: {
        async fetchCityWeathers() {
            for (const i in this.cities) {
                const res = await getCityWeather(this.cities[i].name);
                this.cities[i].data = res.data;
            }
        },
        openModal() {
            this.showModal = true;
        },

        closeModal() {
            this.showModal = false;
        },
        async addCity(name) {
            this.closeModal();
            const res = await getCityWeather(name);
            this.cities.push({ data: res.data, name });
        },
        deleteCity(name) {
            this.cities = this.cities.filter(city => city.name !== name);
        }
    },
    mounted() {
        this.fetchCityWeathers();
    },
    computed: {
    filteredCities() {
      return this.cities.filter(city => {
         return city.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
}
</script>

<style scoped src="./style.css" />