
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    user: {
      name: 'pinia'
    }
  }),
  actions: {

  }
})
