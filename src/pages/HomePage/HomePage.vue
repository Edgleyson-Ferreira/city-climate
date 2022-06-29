<template>
    <main>
        <CardComponent>
            <div class="search">
                <v-text-field :citySearch="city" hide-no-data hide-details label="Nome da cidade" solo></v-text-field>
            </div>
            <div class="container">
                <WeatherCardComponent />
                <WeatherCardComponent />
            </div>
        </CardComponent>
    </main>
</template>

<script lang="ts">
import CardComponent from "@/components/CardComponent/CardComponent.vue";
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";

export default {
    name: "HomePage",
    components: { CardComponent, WeatherCardComponent },
    }
</script>

<style scoped src="./style.css" />