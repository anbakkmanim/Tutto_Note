<template>
  <v-container>
     <v-date-picker
      v-model="date"
      full-width
      landscape
      class="mt-3"
    ></v-date-picker>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      date: '2018-07-17'
    }

  }
}
</script>

<style lang="scss">

</style>

