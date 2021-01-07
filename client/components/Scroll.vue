<template>
    
    <div>
        <p>Des producteurs de vos régions...</p>
        <Annonce />
       
    </div>
   
        
</template>

<script>
    const Annonce = window.httpVueLoader('./components/Annonce.vue');

    module.exports = {
        name:"Scroll" ,
        components: {
            Annonce
        }
    }
</script>

<style>
   
</style>