import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
  state: () => ({
    user: null,
    permissionCode: null
  }),
  actions: {
    /* async getLoginUser () {
      const res = await getLoginUser()
      if (!res) return
      this.user = res || {}
    },
    async getMenuList () {
      const res = await sysPermission()
      if (!res) return
      this.permissionCode = [...res]
    } */
  }
})
