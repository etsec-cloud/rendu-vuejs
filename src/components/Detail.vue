<template>
  <div>  
  <b-card>
    <b-media no-body>
      <b-media-aside vertical-align="center">
          <img :src="filmDetail.Poster"/>
      </b-media-aside>

      <b-media-body class="ml-3">
        <h5 class="mt-0">{{filmDetail.Title}}</h5>
        <p>
        Années : {{filmDetail.Year}} <br>
        Type : {{filmDetail.Type}} <br>
        ID: {{filmDetail.imdbID}} <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh lorem, ultricies non ullamcorper at, tempor in felis. Morbi a mauris ac ex commodo sodales. Nulla facilisi. Morbi sapien magna, pharetra consequat feugiat vitae, rhoncus ac mauris. Praesent laoreet erat nisi, a sodales tellus ultrices at. Sed eget tortor id eros u
        </p>
        <b-media>
       

        <h5 class="mt-0">Super le film c'est top</h5>
        <p class="mb-0">
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </p>
      </b-media>
      </b-media-body>
      
    </b-media>
  </b-card>
  
</div>

</template>
<script>
const axios = require("axios").default;

export default {
  name: "Details",
  components: {},
  mounted() {
    axios
      .get("http://www.omdbapi.com/?i=" + this.$route.params.id + "&apikey=904eed5c") // on récupère l'API
      .then(response => (this.filmDetail = response.data)); // on envoie dans l'array les données
  },
  methods: {},
  data() {
    return {
      filmDetail: null
    };
  }
};
</script>