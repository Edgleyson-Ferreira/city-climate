<template>
    <header>
        <nav class="container">
            <img alt="city_climate" id="logo" src="@/assets/city_climate_logo.png">
            <div id="menu-items">                
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/sobre">Sobre</router-link></li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: 'HeaderComponent',
}
</script>

<style scoped src="./style.css" />