<template>
  <div>
    <h1>User</h1>
    <div v-for="item in data" v-bind:key="item.id">
    </div>
    <form @submit.prevent="submitUser">
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

import {mapActions} from 'vuex'


export default {
  data: () =>({
    data: [],
    name: null,
    username: null,
    price: null,
    token: ""
  }),

  methods : {
    ...mapActions([
       "fetchAllSubreddits","createUser","createSubreddit"
    ]),
    submitUser(){
      if(this.username != null){
      this.createUser(this.username);
      }
    },
    submitSubreddit(){
      if(this.name != null) {
      this.createSubreddit(this.name);
      }
    },
    fetchSubreddits(){
      this.fetchAllSubreddits().then((res) => {
        console.log(res);
        this.data = res;
      })
    },
    get(){
      this.fetchAllSubreddits();
    }
  },

  mounted() {
    this.fetchSubreddits();
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
