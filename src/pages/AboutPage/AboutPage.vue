<template>
    <main>
        <section class="container">
            <h1>Sobre</h1>
            <div class="about">
                <p>
                    O City Climate é um site que permite ao usuário acompanhar o clima de diversas cidades de Pernambuco. 
                    Nele é possível adicionar cidades e ver o clima de cada uma delas, além disso é possível observar a 
                    previsão para os próximos dias através de um gráfico de linhas.
                    
                </p>
                <p>
                    Para sua construção foi utilizado o <a href="https://vuejs.org/" target="blank"><b>framework Vue</b></a>, 
                    as bibliotecas <a href="https://vuetifyjs.com/en/" target="blank"><b>Vuetify</b></a> para a parte de UI e 
                    <a href="https://apexcharts.com/vue-chart-demos/Apexcharts" target="blank"><b>Apexcharts</b></a> para a exibição dos gráficos.
                    Já para os dados do clima de cada cidade foi consumida a API do <a href="https://openweathermap.org/" target="blank"><b>OpenWeatherMap</b></a> 
                    com uma chave de API gratuita.
                </p>
            </div>
        </section>
    </main>
</template>

<script>


export default{
    name:'AboutPage',
}
</script>



<style scoped src="./style.css" />

