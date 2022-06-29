<template>  
  <v-card class="mx-auto" max-width="400">
    <div class="search">
    <v-form v-on:submit.prevent="getWeather">
      <v-text-field v-model="citySearch" hide-no-data hide-details label="Nome da cidades" solo></v-text-field>
    </v-form>    
  </div>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{weather.cityName}} - {{weather.estate}}
        </v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, {{weather.description}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="text-h2" cols="6">
          {{weather.temperature}}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sun.png" alt="Sunny image" width="92"></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list class="transparent">
      <v-list-item v-for="item in forecast" :key="item.day">
        <v-list-item-title>{{ item.day }}</v-list-item-title>

        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.temp }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>
        Full Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'WeatherCardComponent',
    data(){
      return {
        citySearch: "",
        weather: {
          cityName: 'Garanhuns',
          estate: 'PE',
          description: 'Ensolarado',
          temperature: '23',
        },
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
      }
    },
    methods: {
      getWeather: async function(){
        console.log(this.citySearch);
        const key = "cdfbf52ea66b119d020e98bf63f1fa40"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}`;
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        this.weather.cityName = data.name;
      }
    },
  }
</script>