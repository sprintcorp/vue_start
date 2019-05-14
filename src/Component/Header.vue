<template>
  <div>
  <h4>{{msg}}</h4>
      <button class="btn btn-success" @click="onStatus">{{action}}</button>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      action:'Open'
    }
  },
  methods:{
    onStatus(){
      this.action='Close';
      this.msg ='Hello';
      alert('Helloworld');

    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
