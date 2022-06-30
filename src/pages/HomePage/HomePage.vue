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
        <cityModal />
    </main>
</template>

<script>
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";
import CityModal from '@/components/CityModal/CityModal.vue';

export default {
    name: "HomePage",
    components: { WeatherCardComponent, CityModal },
}
</script>

<style scoped src="./style.css" />