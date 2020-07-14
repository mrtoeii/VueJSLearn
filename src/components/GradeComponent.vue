<template>
  <div>
    <h1>Grade</h1>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Number"
          placeholder="Input number here"
          outlined
          v-model="number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn color="info" @click="getGrade">Grade</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    number: ''
  }),
  methods: {
    getGrade () {
      const number = parseInt(this.number)
      const msgerror = 'กรุณากรอกตัวเลข 0-100 เท่านั้น'
      if (Number.isInteger(number)) {
        // console.log(number)
        if (number >= 80 && number <= 100) {
          alert('Grade A')
        } else if (number >= 70 && number <= 79) {
          alert('Grade B')
        } else if (number >= 60 && number <= 69) {
          alert('Grade C')
        } else if (number >= 50 && number <= 59) {
          alert('Grade D')
        } else if (number >= 0 && number <= 49) {
          alert('Grade F')
        } else {
          alert(msgerror)
        }
      } else {
        alert(msgerror)
      }
    }
  }
}
</script>

<style>

</style>
