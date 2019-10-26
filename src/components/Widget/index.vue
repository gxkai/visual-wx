<template>
  <div class="w-72 h-full">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="常用模块" name="1">
        <draggable
          class="flex flex-wrap"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="log"
        >
          <div v-for="(item, index) in list1" :key="index" class="w-1/3 flex flex-col items-center justify-center p-5">
            <i :class="item.icon" />
            <div class="h-2" />
            <div>{{ item.name }}</div>
          </div>
        </draggable>
      </el-collapse-item>
      <el-collapse-item title="互动模块" name="2">

      </el-collapse-item>
      <el-collapse-item title="高级模块" name="3">

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Widget',
  components: {
    draggable
  },
  mixins: [],
  extends: {},
  filters: {},
  provide: {},
  inject: [],
  props: {},
  computed: {
    activeNames: {
      get() {
        return this.$store.getters['left/activeModules']
      },
      set(v) {
        this.$store.commit('left/SET_ACTIVE_MODULES', v)
      }
    }
  },
  watch: {},
  data() {
    return {
      list1: [{
        icon: 'icon-shouye',
        name: '文本'
      }, {
        icon: 'icon-shouye',
        name: '图片'
      }, {
        icon: 'icon-shouye',
        name: '按钮'
      }, {
        icon: 'icon-shouye',
        name: '自由容器'
      }, {
        icon: 'icon-shouye',
        name: '多图文'
      }, {
        icon: 'icon-shouye',
        name: '文章列表'
      }, {
        icon: 'icon-shouye',
        name: '服务列表'
      }, {
        icon: 'icon-shouye',
        name: '魔方导航'
      }, {
        icon: 'icon-shouye',
        name: '名片列表'
      }, {
        icon: 'icon-shouye',
        name: '标签'
      }]
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
