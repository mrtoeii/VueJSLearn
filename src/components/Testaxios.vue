<template>

  <div>
    <br/>
    <v-text-field
      title
      label="Emp Code"
      placeholder="Input emp code here"
      outlined
      v-model="empcode"
    ></v-text-field>
    <v-text-field
      title
      label="Firstname"
      placeholder="Input firstname here"
      outlined
      v-model="firstname"
    ></v-text-field>
    <v-text-field
      title
      label="Lastname"
      placeholder="Input lastname here"
      outlined
      v-model="lastname"
    ></v-text-field>
    <v-btn color="success" @click="getData">Get Data API</v-btn>
    <v-btn color="info" @click="PostData">Post Data API</v-btn>
    <v-btn color="error" @click="deleteData">Delete Data API</v-btn>
    <br/>
    <h1 v-if="ApiData!=''">EmpCode : {{ApiData.empcode}}</h1>
    <h1 v-if="ApiData!=''">Firstname : {{ApiData.firstname}}</h1>
    <h1 v-if="ApiData!=''">Lastname : {{ApiData.lastname}}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    ApiData: '',
    firstname: '',
    lastname: '',
    empcode: ''
  }),
  methods: {
    async getData () {
      try {
        var { data } = await this.axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(data)
        this.ApiData = data
      } catch (error) {
        console.log(error.message)
      }
    },
    async deleteData () {
      try {
        var { data } = await this.axios.delete('https://jsonplaceholder.typicode.com/todos/2')
        console.log(data)
        this.ApiData = data
      } catch (error) {
        console.log(error.message)
      }
    },
    async PostData () {
      try {
        var { data } = await this.axios.post('https://jsonplaceholder.typicode.com/posts', {
          firstname: this.firstname,
          lastname: this.lastname,
          empcode: this.empcode
        })
        console.log(data)
        this.ApiData = data
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>

<style>

</style>
