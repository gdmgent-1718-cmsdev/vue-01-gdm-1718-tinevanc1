<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input name="title" placeholder="Title"  v-model="title" ><br>
    <a @click="createRequest">Versturen</a>


  </div>
</template>

<script>
import  axios from 'axios'
export default {
  name: 'add-article',
  data () {
    return {
      msg: 'Add',
      title: ''
    }
  },
  methods: {
    createRequest() {
        axios.post('http://cmsdev.localhost/node',{
          "_links": {
            "type": {
              "href": "http://cmsdev.localhost/rest/type/node/article"
            }
          },
          "title": {
            "value": "Mijn tweede Artikel"
          },
          "type": {
            "target_id": "article"
          }
        },
        {
          auth: {
            username: 'admin',
            password: 'secret'
          },
          'header': {
              'Accept': 'application/hal+json',
              'Content-Type': 'application/hal+json',
              'X-CSRF-Token': 'rBbKT7NWaTVuRwcjV2TsKlxBzDVDkuf9N7FPkoJ4o5k',
          }
        })
        .then(response => {console.log('Succesvol verstuurd!')})
        .catch(error => {console.log(error.response.data )});
    }
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
