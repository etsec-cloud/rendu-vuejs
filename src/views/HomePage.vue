<template>
 <div class="gdw">
  <b-card-group class="mx-auto" deck>
    <div 
        v-for="film in films"
        :key="film.imdbID">
       <Card :film="film.imdbID" />
    </div>
     
</b-card-group>

  </div>
</template>

<script>

const axios = require('axios').default;

import Card from './../components/Card.vue'
export default {
  name: 'HomePage',
  components: {
  Card
  },
  props: {
   film: {
            type :Object,
            default: null
        },
  },
  data(){
        return{
            affiche: false,
            films: null
    }

  },
  
  mounted(){
    axios.
    get('http://www.omdbapi.com/?s=lord&apikey=6d322388').
    then(response => (this.films = response.data.Search ))
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
button{
  margin-left: 20px;
}
.gdw{
  width: 100%;
}
</style>
