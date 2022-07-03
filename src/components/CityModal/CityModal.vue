<template>
    <v-row justify="center">
        <v-dialog class="dialog" width="70vh" v-model="dialog" persistent @click:outside="handleClose">
            <v-card class="card pb-5" >
                <v-card-title>
                    <p class="card-title text-h5">Adicione outra cidade</p>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-select v-model="citySelected" :items="cities" label="Cidades" outlined></v-select>
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
        cities: [
        "Abreu e Lima",
        "Afogados da Ingazeira",
        "Agrestina",
        "Água Preta",
        "Águas Belas",
        "Alagoinha",
        "Aliança",
        "Altinho",
        "Amaraji",
        "Angelim",
        "Araçoiaba",
        "Araripina",
        "Arcoverde",
        "Barra de Guabiraba",
        "Barreiros",
        "Belém de Maria",
        "Belém de São Francisco",
        "Belo Jardim",
        "Betânia",
        "Bezerros",
        "Bodocó",
        "Bom Conselho",
        "Bom Jardim",
        "Bonito",
        "Brejão",
        "Brejinho",
        "Brejo da Madre de Deus",
        "Buenos Aires",
        "Buíque",
        "Cabo de Santo Agostinho",
        "Cabrobó",
        "Cachoeirinha",
        "Caetés",
        "Calçado",
        "Calumbi",
        "Camaragibe",
        "Camocim de São Félix",
        "Camutanga",
        "Canhotinho",
        "Capoeiras",
        "Carnaíba",
        "Carnaubeira da Penha",
        "Carpina",
        "Caruaru",
        "Casinhas",
        "Catende",
        "Cedro",
        "Chã de Alegria",
        "Chã Grande",
        "Condado",
        "Correntes",
        "Cortês",
        "Cumaru",
        "Cupira",
        "Custódia",
        "Dormentes",
        "Escada",
        "Exu",
        "Feira Nova",
        "Fernando de Noronha",
        "Ferreiros",
        "Flores",
        "Floresta",
        "Frei Miguelinho",
        "Gameleira",
        "Garanhuns",
        "Glória do Goitá",
        "Goiana",
        "Granito",
        "Gravatá",
        "Iati",
        "Ibimirim",
        "Ibirajuba",
        "Igarassu",
        "Iguaraci",
        "Inajá",
        "Ingazeira",
        "Ipojuca",
        "Ipubi",
        "Itacuruba",
        "Itaíba",
        "Itamaracá",
        "Itambé",
        "Itapetim",
        "Itapissuma",
        "Itaquitinga",
        "Jaboatão dos Guararapes",
        "Jaqueira",
        "Jataúba",
        "Jatobá",
        "João Alfredo",
        "Joaquim Nabuco",
        "Jucati",
        "Jupi",
        "Jurema",
        "Lagoa do Carro",
        "Lagoa do Itaenga",
        "Lagoa do Ouro",
        "Lagoa dos Gatos",
        "Lagoa Grande",
        "Lajedo",
        "Limoeiro",
        "Macaparana",
        "Machados",
        "Manari",
        "Maraial",
        "Mirandiba",
        "Moreilândia",
        "Moreno",
        "Nazaré da Mata",
        "Olinda",
        "Orobó",
        "Orocó",
        "Ouricuri",
        "Palmares",
        "Palmeirina",
        "Panelas",
        "Paranatama",
        "Parnamirim",
        "Passira",
        "Paudalho",
        "Paulista",
        "Pedra",
        "Pesqueira",
        "Petrolândia",
        "Petrolina",
        "Poção",
        "Pombos",
        "Primavera",
        "Quipapá",
        "Quixaba",
        "Recife",
        "Riacho das Almas",
        "Ribeirão",
        "Rio Formoso",
        "Sairé",
        "Salgadinho",
        "Salgueiro",
        "Saloá",
        "Sanharó",
        "Santa Cruz",
        "Santa Cruz da Baixa Verde",
        "Santa Cruz do Capibaribe",
        "Santa Filomena",
        "Santa Maria da Boa Vista",
        "Santa Maria do Cambucá",
        "Santa Terezinha",
        "São Benedito do Sul",
        "São Bento do Una",
        "São Caitano",
        "São João",
        "São Joaquim do Monte",
        "São José da Coroa Grande",
        "São José do Belmonte",
        "São José do Egito",
        "São Lourenço da Mata",
        "São Vicente Ferrer",
        "Serra Talhada",
        "Serrita",
        "Sertânia",
        "Sirinhaém",
        "Solidão",
        "Surubim",
        "Tabira",
        "Tacaimbó",
        "Tacaratu",
        "Tamandaré",
        "Taquaritinga do Norte",
        "Terezinha",
        "Terra Nova",
        "Timbaúba",
        "Toritama",
        "Tracunhaém",
        "Trindade",
        "Triunfo",
        "Tupanatinga",
        "Tuparetama",
        "Venturosa",
        "Verdejante",
        "Vertente do Lério",
        "Vertentes",
        "Vicência",
        "Vitória de Santo Antão",
        "Xexéu"
      ],
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
    },    
    mounted(){
        this.dialog = this.show;
    },
}

</script>

<style scoped src="./style.css">

</style>