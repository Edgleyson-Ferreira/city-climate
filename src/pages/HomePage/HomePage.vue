<template>
    <main>
        <div class="search">
            <v-text-field hide-no-data hide-details label="Nome da cidade" solo>
            </v-text-field>
        </div>
        <div class="space"></div>
        <section class="cities">
            <div class="city" v-for="(city, index) in cities" :key="index">
                <WeatherCardComponent :cityName="city.name" />
            </div>
            <!--<WeatherCardComponent :cityName="cityName" :data="data" @handleEnter="getWeather($event)" />-->
        </section>
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";


export default {
    name: "HomePage",
    components: { WeatherCardComponent },
    data() {
        return {
            cities: [
                {name: 'Garanhuns'},
                {name: 'Caruaru'},
                {name: 'Recife'},
            ]
        };
    },
}
</script>

<style scoped src="./style.css" />