<template>
  <div>
    <h1>Winkelwagen</h1>
    <div v-for="item in data" v-bind:key="item.id">
      Naam: {{item.name}}
      Prijs: {{item.price}}
    </div>
    <form @submit.prevent="submit">
      <input type="text" v-model="name">
      <input type="number" v-model="price">
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: () =>({
    data: [],
    name: null,
    price: null,
  }),

  methods : {
    submit(){
      if(this.name != null && this.price != null)
        axios.post('http://localhost:8081/item/',
            {
              name:this.name,
              price:this.price
            })
            .then(r => (console.log(r)))
    }
  },

  mounted() {
    axios.get('http://localhost:8081/item/')
        .then(r => (this.data = r.data))
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
  color: #42b983;
}
</style>
