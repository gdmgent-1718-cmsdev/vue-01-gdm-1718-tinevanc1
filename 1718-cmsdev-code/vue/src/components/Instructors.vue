<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div class="instructors">
        <table>
            <tr>
              <th>Name</th>
              <th>First name</th>
              <th>Academic Rank</th>
              <th>Academic Title</th>
            </tr>
            <tr v-for="instructor in instructors">
                <td>{{ instructor.name[0].value}}</td>
                <td>{{ instructor.field_first_name[0].value}}</td>
                <td>{{ instructor.field_academic_rank[0].value}}</td>
                <td>
                <ul v-for="field_academic_title in instructor.field_academic_title">
                  <li>{{field_academic_title.value}}</li>
                </ul>
                </td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
  name: 'instructors',
  data () {
    return {
      msg: 'Instructors',
      instructors: []
    }
  },
  created() {
    axios
      .get('http://cmsdev.localhost/instructors?_format=hal_json')
      .then(({data:response}) => { this.instructors = response})
      .catch(({message:error}) => {this.instructors = response})
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

table {
    margin-left: 20px;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}
</style>
