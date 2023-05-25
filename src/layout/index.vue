
<template>
  <div class="app-container">
    <CustomHeader :title="route.meta.title" />
    <div
      class="layout-content"
      :style="{ paddingBottom: route.meta.showTabBar !== false ? '1.333rem' : '' }"
    >
      <router-view />
      <!--  <keep-alive v-if="$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view> -->
    </div>
    <div
      v-if="route.meta.showTabBar !== false"
      class="layout-footer"
    >
      <TabBar
        :data="tabBar"
        @chang="handleChange"
      />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
// 底部tab栏相关
const useTabBar = () => {
  const state = reactive({
    tabBar: [
      {
        title: '主页',
        to: {
          name: 'Home'
        },
        icon: 'wap-home-o'
      },
      {
        title: '今日安排',
        to: {
          name: 'Plan'
        },
        icon: 'desktop-o'
      },
      {
        title: '通讯录',
        to: {
          name: 'List'
        },
        icon: 'notes-o'
      },
      {
        title: '我的',
        to: {
          name: 'About'
        },
        icon: 'manager-o'
      }
    ]
  })
  return toRefs(state)
}
const { tabBar } = useTabBar()

const handleChange = () => {
}

</script>

<style lang="scss" scoped>
</style>
