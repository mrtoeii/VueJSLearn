<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          title
          label="Num1"
          placeholder="Num1"
          outlined
          v-model="num1"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: [
    'num1',
    'title'
  ]
}
</script>

<style>

</style>
