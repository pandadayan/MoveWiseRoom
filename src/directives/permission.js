
import { useStore } from '@/store/user'

export default {
  name: 'permission',
  directive: {
    mounted (el, binding) {
      const store = useStore()
      const value = binding.value
      const operations = store.permissionCode
      if (!value) {
        return
      }
      if (!operations.includes(value)) {
        el.style.display = 'none'
      }
    }
  }
}
