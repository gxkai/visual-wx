<template>
  <div>
    <el-button type="success" @click="onClick"><slot /></el-button>
  </div>
</template>

<script>
export default {
  name: 'my-button',
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
