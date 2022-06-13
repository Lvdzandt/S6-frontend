<template>
  <div>
    <h1>User</h1>
    <div v-for="item in data" v-bind:key="item.id">
    </div>
    <form @submit.prevent="submit">
      <input type="text" v-model="username">
      <button type="submit">
        Submit
      </button>
    </form>

    <div>
      <h1>SubReddits</h1>
      <div v-for="item in data" v-bind:key="item.id">
        Naam: {{item.name}}
        <button>Follow</button>
      </div>
      <form @submit.prevent="submitSubreddit">
        <input type="text" v-model="name">
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>

</template>

<script>

import axios from "axios";

export default {
  data: () =>({
    data: [],
    name: null,
    username: null,
    price: null,
  }),

  methods : {
    submit(){
      if(this.name != null)
        axios.post('http://gateway-service/user/',
            {
              name:this.username,
            })
            .then(r => (console.log(r)))
    },
    submitSubreddit(){
      if(this.name != null)
        axios.post('gateway-service/subreddit/',
            {
              name:this.name,
            })
            .then(r => (console.log(r)))
    }
  },

  mounted() {
    axios.get('10.43.161.188:8083/subreddit/all')
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
