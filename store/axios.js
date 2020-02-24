import axios from 'axios'

export const state = () => ({
  loading: false,
  data: null
})

export const getters = {
  getLoading(state) {
    return state.loading
  },
  getData(state) {
    return state.data
  }
}

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setData(state, json) {
    state.data = json
  }
}

export const actions = {
  async fetchPostsByUserId(context, userId) {
    context.commit('setLoading', true)

    const url = `/api/user/${userId}/posts`
    try {
      const res = await axios.get(url)
      context.commit('setData', res.data)
      context.commit('setLoading', false)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('ERROR fetching data', url, err.message)
      // eslint-disable-next-line no-console
      console.error(err)
      context.commit('setLoading', false)
    }
  },
  async fetchUsers(context) {
    context.commit('setLoading', true)

    const url = '/api/users'
    try {
      const res = await axios.get(url)
      context.commit('setData', res.data)
      context.commit('setLoading', false)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('ERROR fetching data', url, err.message)
      // eslint-disable-next-line no-console
      console.error(err)
      context.commit('setLoading', false)
    }
  }
}
