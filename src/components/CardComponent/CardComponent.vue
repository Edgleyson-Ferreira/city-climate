<template> 
<v-card>    
    <div class="card-container">
        <div class="card-header-border"></div>
        <div class="card-header">
            <p class="card-header-title">Titulo</p>
        </div>       
    </div>
    <div class="card-body">
        <slot></slot>
    </div>  
</v-card>
</template>

<script lang="ts">
export default {
    name: "CardComponent",
}
</script>

<style scoped src="./style.css" />