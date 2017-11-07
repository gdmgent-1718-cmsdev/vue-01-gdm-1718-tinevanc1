<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
  name: 'read-article',
  data () {
    return {
      msg: 'Read'
    }
  },
  created() {
    axios
      .get('http://cmsdev.localhost/node/1?_format=hal_json')
      .then(({data:response}) => {
        console.log(response)
      })
      .catch(({message:error}) => {
        console.error(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
