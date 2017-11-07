<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div class="courses">
        <table>
             <tr>
              <th>Name</th>
              <th>Institution</th>
            </tr>
            <tr v-for="course in courses">
                <td>{{ course.name[0].value}}</td>
                <td>{{ course.field_institution[0].value}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
  name: 'courses',
  data () {
    return {
      msg: 'Courses',
      courses: []
    }
  },
  created() {
    axios
      .get('http://cmsdev.localhost/courses?_format=hal_json')
      .then(({data:response}) => { this.courses = response})
      .catch(({message:error}) => {this.courses = response})
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
