<template>
    <main>
        <div class="search">
            <v-text-field hide-no-data hide-details label="Nome da cidade" solo>
                <v-icon slot="append" color="gray">
                    mdi-magnify
                </v-icon>
            </v-text-field>
        </div>
        <div class="space"></div>
        <section class="cities">
            <div class="city" v-for="(city, index) in cities" :key="index">
                <WeatherCardComponent :cityName="city.name" :data="city.weather" @handleDelete="deleteCity"/>
            </div>
            <!--<WeatherCardComponent :cityName="cityName"  @handleEnter="getWeather($event)" />-->
        </section>
        <CityModal :show="showModal" @close="closeModal" @confirm="addCity"/>
        <v-btn @click="openModal">clickmodal</v-btn>
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";
import { getCityWeather } from "@/services"
import CityModal from '@/components/CityModal/CityModal.vue';

export default {
    name: "HomePage",
    components: { WeatherCardComponent, CityModal },
    data() {
        return {
            cities:[
            
                {weather: {}, name: 'Garanhuns'},
                {weather: {}, name: 'Caruaru'},
                {weather: {}, name: 'Recife'},
                {weather: {}, name: 'Palmeirina'},
                {weather: {}, name: 'Lajedo'},
            ],
            showModal: false,
            showChart: false,
        };
    },
    methods: {
        async fetchCityWeathers() {
            for (const i in this.cities) {
                const res = await getCityWeather(this.cities[i].name);
                this.cities[i].weather = res.data;
            }
        },

        openModal() {
            this.showModal = true;
        },

        closeModal(){
            this.showModal = false;
        },
        async addCity(name){
            this.closeModal();
            const res = await getCityWeather(name);
            this.cities.push({weather: res.data, name});
        },
        deleteCity(name){
            this.cities = this.cities.filter(city => city.name !== name);
        }
    },
    mounted() {
        this.fetchCityWeathers();
    },
}

</script>

<style scoped src="./style.css" />