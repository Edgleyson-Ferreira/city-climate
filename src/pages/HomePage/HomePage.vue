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
                <WeatherCardComponent :cityName="city.name" :data="city.weather" />
            </div>
            <!--<WeatherCardComponent :cityName="cityName"  @handleEnter="getWeather($event)" />-->
        </section>
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";
import { getCityWeather } from "@/services"

export default {
    name: "HomePage",
    components: { WeatherCardComponent },
    data() {
        return {
            cities:[
            
                {weather: {}, name: 'Garanhuns'},
                {weather: {}, name: 'Caruaru'},
                {weather: {}, name: 'Recife'},
                {weather: {}, name: 'Palmeirina'},
                {weather: {}, name: 'Lajedo'},
            ]
        };
    },
    mounted(){
        this.fetchCityWeathers();
    },
    methods: {
        async fetchCityWeathers(){
            for(const i in this.cities){
                const res = await getCityWeather(this.cities[i].name);
                this.cities[i].weather = res.data;
            }
        }        
    }
}
</script>

<style scoped src="./style.css" />