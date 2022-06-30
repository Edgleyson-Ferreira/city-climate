<template>
    <main>
        <div class="search">
            <v-text-field hide-no-data hide-details label="Nome da cidade" solo>
            </v-text-field>
        </div>
        <div class="space"></div>
        <div>
            <WeatherCardComponent :cityName="cityName" :data="data" @handleEnter="getWeather($event)" />
        </div>
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";

export default {
    name: "HomePage",
    components: { WeatherCardComponent },
}
</script>

<style scoped src="./style.css" />