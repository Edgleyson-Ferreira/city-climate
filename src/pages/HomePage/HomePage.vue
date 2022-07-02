<template>
    <main>
        <div class="options">            
            <div class="search mr-10">
                <v-text-field hide-no-data hide-details label="Nome da cidade" solo>
                    <v-icon slot="append" color="gray">
                        mdi-magnify
                    </v-icon>
                </v-text-field>
            </div>
            <div>
                <v-btn shaped large color="success white--text" width="auto" elevation="1" @click="openModal">
                    <v-icon left>
                        mdi-plus
                    </v-icon>
                    Adicionar cidade
                </v-btn>
            </div>
        </div>
        <CityModal :show="showModal" @close="closeModal" @confirm="addCity" />
        <div class="space"></div>
        <div class="cities">
            <div class="mb-8 city" v-for="(city, index) in cities" :key="index">
                <WeatherCardComponent :cityName="city.name" :weather="city.weather" @handleDelete="deleteCity" />
            </div>
            <!--<WeatherCardComponent :cityName="cityName"  @handleEnter="getWeather($event)" />-->
        </div>
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";
import { getCityWeather } from "@/services"
import { getWeatherIcon } from "@/services"
import CityModal from '@/components/CityModal/CityModal.vue';

export default {
    name: "HomePage",
    components: { WeatherCardComponent, CityModal },
    data() {
        return {
            cities: [
                { weather: {}, name: 'Garanhuns', icon: '' },
                { weather: {}, name: 'Caruaru', icon: '' },
                { weather: {}, name: 'Recife', icon: '' },
                { weather: {}, name: 'Palmeirina', icon: '' },
                { weather: {}, name: 'Lajedo', icon: '' },
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
        async fetchWeatherIcons() {
            for (const i in this.cities) {
                const res = await getWeatherIcon(this.cities[i].icon);
                this.cities[i].icon = res.data;
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
            this.cities.push({ weather: res.data, name });
        },
        deleteCity(name) {
            this.cities = this.cities.filter(city => city.name !== name);
        }
    },
    mounted() {
        this.fetchCityWeathers();
    },
}

</script>



<style scoped src="./style.css" />