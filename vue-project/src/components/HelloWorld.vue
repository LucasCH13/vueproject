<script>
import { computed } from '@vue/reactivity';
import axios from 'axios'

/* Création du components*/

export default {
    name: 'HelloWorld',
    data(){
        return {
            station: undefined

        }
    },
    
    mounted() {
        axios
        .get('https://hubeau.eaufrance.fr/api/vbeta/ecoulement/observations?format=json&code_departement=04&size=20')
        .then((response) => {
            this.station = response.data.data;
            console.log(response.data.data);
        })
    },
    computed: {
        //getter
        getStation() {
            return this.station
        }
    }
}
</script>
<!-- Rendu dans le template-->
<template>
   
    <div id="content">
        <h1>Liste des stations </h1>
        {{getstation}}

    </div>
    
  
</template>

<style scoped>

@media (min-width: 1024px) {
 
}
</style>
