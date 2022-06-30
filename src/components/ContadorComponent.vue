<template>
  <div class="d-flex align-center">
    <button @click="subt"> - </button>
    <span>{{ count }}</span>
     <button @click="soma" > + </button>
  </div>
</template>

<script>
export default {
    name: 'ContadorComponent',
    props:{
        count: {
            type: Number,
            default: 0,
        },
    },
    methods:{
      subt: function(){
        this.$emit('subt')
      },
      soma: function(){
         this.$emit('soma')
      }
    }
}
</script>

<style>

</style>