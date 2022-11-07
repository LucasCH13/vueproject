<script>
import { computed } from '@vue/reactivity';
import axios from 'axios'
import { ref } from 'vue'
import EcoulementAPI from '../services/EcoulementAPI'


/* Création du components*/

export default {
    name: 'HelloWorld',
    setup() {
        
        let station = ref('')
        
        const loadRequest = async () => {
            try {
                    let response = await EcoulementAPI.getEcoulement()
                    station.value = response.data.data;
                    
            }
            catch(err) {
                    console.log(err)
                }
            console.log(station);
        
        }
            loadRequest()

        return {
            station
        }
    }
}
</script>
<!-- Rendu dans le template-->
<template>
   
    <div id="content">
        <h1>Liste des stations </h1>
        <p>
            
        </p>
                
    </div>
    
  
</template>

<style scoped>

@media (min-width: 1024px) {
 
}
</style>
