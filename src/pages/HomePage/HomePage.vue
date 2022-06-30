<template>
    <main>
        <CardComponent>
            <ContadorComponent :count="count" @subt="subt" @soma="soma"/>
            <div class="search">
                <v-text-field v-model="cityName" hide-no-data hide-details label="Nome da cidade" solo></v-text-field>
            </div>
            <div class="container">
                <WeatherCardComponent :cityName="cityName" :data="data" @handleEnter="getWeather($event)"/>                
            </div>
        </CardComponent>
    </main>
</template>

<script>
import CardComponent from "@/components/CardComponent/CardComponent.vue";
import WeatherCardComponent from "@/components/WeatherCardComponent/WeatherCardComponent.vue";
import ContadorComponent from "@/components/ContadorComponent.vue";

export default {
    name: "HomePage",
    components: { CardComponent, WeatherCardComponent, ContadorComponent },
    data() {
        return {
            cityName: "Recife",
            data: {},
            count: 0,
        };
    },
     methods: {
      getWeather: async function(cityName){
        const key = "cdfbf52ea66b119d020e98bf63f1fa40";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
        const response = await fetch(baseURL);
        this.data = await response.json();
      },
      subt: function(){
        this.count = this.count - 1;
      },
      soma: function(){
         this.count = this.count + 1;
      }
    }
}
</script>

<style scoped src="./style.css" />