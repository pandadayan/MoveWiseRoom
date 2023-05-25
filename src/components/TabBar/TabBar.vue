
<template>
  <div>
    <van-tabbar
      v-model="active"
      fixed
      route
      @change="onChange"
    >
      <van-tabbar-item
        v-for="(item, index) in props.data"
        :key="index"
        :to="item.to"
        :name="item.name"
        :icon="item.icon"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>

<script setup>

const props = defineProps({
  data: {
    type: Array,
    default: () => [{}]
  }
})

const emit = defineEmits(['chang'])

const active = ref('home')

const onChange = (value) => {
  // console.log(value,'value');
  emit('chang', value)
}

</script>

<style lang="scss" scoped>
</style>
