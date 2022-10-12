<script>

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';


/* */
export default {
  components: {
    HelloWorld,
}
}
</script>


<template>
  <h1 id="titre">API Hub'Eau</h1>
  <HelloWorld />
  <footer class="footer-content">
    <img class="logo" src="@/assets/logo-hubeau-blue.svg"/>
  </footer>
 
</template>

<style>
  #titre {
    display: flex;
    justify-content: center;
  }
  footer {
    position: fixed;
    width: 100%; height: 50px;
    bottom: 0; left:  0; right: 0;
  }
.footer-content {
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: lightblue;
    color: #fff;
}


</style>
