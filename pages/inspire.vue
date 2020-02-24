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
          <v-chip class="caption">Using fetch()</v-chip>
          <v-btn @click.stop="FETCH_fetchPostsByUser"
            >Fetch Posts for User #1</v-btn
          >
          <v-btn @click.stop="FETCH_fetchUsers">Fetch All Users</v-btn>
          <v-chip class="caption">{{ environmentVariable }}</v-chip>
        </v-col></v-row
      >
      <hr />
      <v-row>
        <v-col>
          <v-chip class="caption">Using axios()</v-chip>
          <v-btn @click.stop="AXIOS_fetchPostsByUser"
            >Fetch Posts for User #1</v-btn
          >
          <v-btn @click.stop="AXIOS_fetchUsers">Fetch All Users</v-btn>
          <v-chip class="caption">{{ environmentVariable }}</v-chip>
        </v-col></v-row
      >
      <hr />
      <v-row>
        <v-col>
          <v-chip class="caption">Using Vuex Store</v-chip>
          <v-btn @click.stop="STORE_fetchPostsByUser(1)"
            >Fetch Posts for User #1</v-btn
          >
          <v-btn @click.stop="STORE_fetchUsers">Fetch All Users</v-btn>
          <v-chip class="caption">{{ environmentVariable }}</v-chip>
        </v-col></v-row
      >
      <hr />
      <v-row
        ><v-col>
          <p v-if="loading === true || getLoading() === true">
            fetching data...
          </p>
          <pre v-else-if="code" class="text-left">{{ code }}</pre>
          <pre v-else class="text-left">{{ getData() }}</pre></v-col
        ></v-row
      >
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      code: null,
      loading: false,
      environmentVariable: process.env.ENV_APP_NAME || '?'
    }
  },
  methods: {
    ...mapGetters({
      getLoading: 'axios/getLoading',
      getData: 'axios/getData'
    }),
    STORE_fetchPostsByUser() {
      this.code = null
      this.$store.dispatch('axios/fetchPostsByUserId', 1)
    },
    STORE_fetchUsers() {
      this.code = null
      this.$store.dispatch('axios/fetchUsers')
    },
    FETCH_fetchPostsByUser() {
      this.callBackendApi('/api/user/1/posts', 'fetch')
    },
    FETCH_fetchUsers() {
      this.callBackendApi('/api/users', 'fetch')
    },
    AXIOS_fetchPostsByUser() {
      this.callBackendApi('/api/user/1/posts', 'axios')
    },
    AXIOS_fetchUsers() {
      this.callBackendApi('/api/users', 'axios')
    },
    callBackendApi(url, framework) {
      const _ = this

      this.loading = true
      if (framework === 'fetch') {
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
      } else {
        // axios
        axios
          .get(url)
          .then((res) => {
            _.code = res.data
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
}
</script>

<style></style>
