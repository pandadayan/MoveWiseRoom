<template>
  <van-sticky>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="clickLeft"
      @click-right="clickRight"
    >
      <template #left>
        <van-icon
          :color="color"
          size="20"
          :name="leftIcon"
        /><span :style="color">{{ leftText }}</span>
      </template>
    </van-nav-bar>
  </van-sticky>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: ''
  },
  leftIcon: {
    type: String,
    default: 'arrow-left'
  },
  leftText: {
    type: String,
    default: ''
  },
  rightText: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#333'
  }
})

const emit = defineEmits(['clickLeft', 'clickRight'])

const route = useRoute()
const router = useRouter()

window.addEventListener('hashchange', () => {
  const currentPath = window.location.hash.slice(1)
  console.log('route.path !== currentPath: ', route.path, currentPath)
  if (route.path !== currentPath) {
    router.push(currentPath)
  }
}, false)

const clickLeft = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
const clickRight = () => {
  emit('clickRight')
}
</script>

<style lang="scss" scoped>
</style>
