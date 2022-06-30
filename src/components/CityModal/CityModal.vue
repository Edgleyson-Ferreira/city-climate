<template>
    <v-row justify="center">
        <v-dialog class="dialog" width="50vh" v-model="dialog" persistent max-width="600px">
            <v-card class="card pb-5" >
                <v-card-title>
                    <v-container>
                    <span class="card-title text-h5">Adicione outra cidade</span>
                    </v-container>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-select :items="['Pernambuco']" label="Estado" outlined></v-select>
                        <v-select :items="['Garanhuns', 'Caruaru', 'Recife']" label="Município" outlined></v-select>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                        <v-btn  color="#297ac7" class="btn-card" align="center" elevation="2" @click="dialog = false">
                            <p class="bnt-text">Ver previsão do tempo</p>
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        dialog: true,
    }),
}
</script>

<style scoped src="./style.css">

</style>