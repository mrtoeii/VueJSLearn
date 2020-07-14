<template>
  <div>
    <!-- <h1 v-if="Show">{{ Word1 }}</h1>
    <h1 v-if="!Show">{{ Word2 }}</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{index+1}} - {{item.massage}}</li>
    </ul>
    <v-btn color="success" @click="display">show</v-btn> -->
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Num1"
          placeholder="Num1"
          outlined
          v-model="num1"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Num2"
          placeholder="Num2"
          outlined
          v-model="num2"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn color="info" @click="showmessage">Login</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    Word1: 'New Normal',
    Word2: 2 + 1,
    Show: true,
    items: [
      { massage: 'Foo' },
      { massage: 'Bar' },
      { massage: 'Car' }
    ],
    num1: '',
    num2: ''
  }),
  methods: {
    display () {
      // const a = 369
      // const b = 256
      const result = (2 * 0 * 0 * 5 * 8)
      const name = 'Arkkarachat'
      alert(result + name)
    },
    showmessage () {
      const sum = parseInt(this.num1) + parseInt(this.num2)
      alert(sum)
    }
  }
}
</script>

<style>

</style>
