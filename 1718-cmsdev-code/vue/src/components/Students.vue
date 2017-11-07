<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div class="students">
        <table>
             <tr>
              <th>Name</th>
              <th>First name</th>
            </tr>
            <tr v-for="student in students">
                <td>{{ student.name[0].value}}</td>
                <td>{{ student.field_first_name[0].value}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
  name: 'students',
  data () {
    return {
      msg: 'Students',
      students: []
    }
  },
  created() {
    axios
      .get('http://cmsdev.localhost/students?_format=hal_json')
      .then(({data:response}) => { this.students = response})
      .catch(({message:error}) => {this.students = response})
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
