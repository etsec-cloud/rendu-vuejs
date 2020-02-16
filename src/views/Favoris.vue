<template>
  <div>
    <b-card-group deck>
      <div v-for="film in filmFavs" :key="film.imdbID">
        <Card :film="film"/>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Favoris",
  components: {
    Card
  },
  data: function() {
    return {
      filmFavs: this.$store.getters.filmFavs
    };
  }
};
</script>