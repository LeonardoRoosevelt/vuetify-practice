<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold">
          {{ title }}
        </h1>
      </v-col>
      <v-col class="mb-4">
        <v-btn class="display-2 font-weight-bold" data-testid="button" @click="title = 'Hello'">
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    title: 'Welcome to Vuetify Practice'
  })
}
</script>
