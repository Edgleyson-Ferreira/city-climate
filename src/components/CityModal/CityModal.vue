<template>
    <v-row justify="center">
        <v-dialog class="dialog" width="50vh" v-model="dialog" persistent max-width="600px" @click:outside="handleClose">
            <v-card class="card pb-5" >
                <v-card-title>
                    <v-container>
                    <span class="card-title text-h5">Adicione outra cidade</span>
                    </v-container>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-select v-model="citySelected" :items="cities" label="Município" outlined></v-select>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                        <v-btn  color="#297ac7" class="white--text"  align="center" elevation="2" @click="handleConfirm">
                            <p class="bnt-text">Ver previsão do tempo</p>
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { getPECities } from "@/services";

export default {
    name: "CityModal",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        dialog: false,
        cities: [],
        citySelected: '',
    }),
    watch:{
        show(newValue){
            this.dialog = newValue;
        }
    },
    methods: {
        handleClose() {
            this.$emit('close');
        },
        handleConfirm() {
            this.$emit('confirm', this.citySelected);
        },
        async getCities(){
            const res = await getPECities();
            this.cities = res.data.map(item => item.nome)
        }
    },    
    mounted(){
        this.dialog = this.show;
        this.getCities();
    },
}

</script>

<style scoped src="./style.css">

</style>