<template>
    <header>
        <nav>
            <img alt="city_climate" id="logo" src="@/assets/city_climate_logo.png">
            <div id="menu-items">                
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">Sobre</router-link></li>
                    <li><router-link to="/contact">Contato</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style scoped src="./style.css" />