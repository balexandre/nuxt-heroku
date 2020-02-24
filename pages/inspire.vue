<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>

      <hr />
      <v-row>
        <v-col>
          <v-btn @click.stop="fetchPostsByUser">Fetch Posts for User #1</v-btn>
          <v-btn @click.stop="fetchUsers">Fetch All Users</v-btn>
          <v-chip class="caption">{{ environmentVariable }}</v-chip>
        </v-col></v-row
      >
      <hr />
      <v-row
        ><v-col>
          <p v-if="loading">fetching data...</p>
          <pre v-else class="text-left">{{ code }}</pre></v-col
        ></v-row
      >
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      code: null,
      loading: false,
      environmentVariable: process.env.ENV_APP_NAME || '?'
    }
  },
  methods: {
    fetchPostsByUser() {
      this.callBackendApi('/api/user/1/posts')
    },
    fetchUsers() {
      this.callBackendApi('/api/users')
    },
    callBackendApi(url) {
      const _ = this

      this.loading = true
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          _.code = json
          _.loading = false
        })
        .catch((err) => {
          _.code = err.message + '\n\n' + err.stack
          _.loading = false
          // eslint-disable-next-line no-console
          console.error(err)
        })
    }
  }
}
</script>

<style></style>
