<template>
  <div>
    <div class="w-screen h-20 shadow flex items-center">
      <div class="flex items-center h-20">
        <div class="bg-gray-600 w-20 h-full flex justify-center items-center">
          <i class="icon-shouye text-blue-900 text-2xl" />
        </div>
        <div class="w-px bg-gray-300 h-full" />
        <div class="flex items-center text-gray-500 px-10 truncate">
          <i class="icon-shouye text-2xl" />
          <div class="w-2" />
          <span>更换模版</span>
        </div>
        <div class="w-px bg-gray-300  h-full" />
        <div class="flex items-center text-gray-500 px-10 truncate">
          <i class="icon-shouye  text-2xl" />
          <div class="w-2" />
          <span>管理小程序</span>
        </div>
        <div class="w-px bg-gray-300 h-full" />
        <div class="p-10">
          <el-dropdown>
            <div class="flex items-center text-gray-500 hover:text-blue-900">
              <i class="icon-shouye  text-2xl" />
              <div class="w-2" />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divide>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>站点中心</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>开通商城</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>开通网站</div>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="px-20 flex justify-center items-center flex-1">
        <el-button type="primary">审核发布</el-button>
      </div>
      <div class="flex items-center h-20 py-2">
        <div class="flex items-center">
          <el-dropdown>
            <div class="flex items-center text-gray-500 hover:text-blue-900">
              <i class="icon-shouye  text-2xl" />
              <div class="w-2" />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divide>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>在线客服</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>帮助中心</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>功能建议</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex items-center">
                  <i class="icon-shouye  text-2xl" />
                  <div>代理咨询</div>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="flex items-center text-gray-500 px-5 truncate">
          <i class="icon-shouye  text-2xl" />
          <div class="w-2" />
          <div>限时低价升级</div>
        </div>
        <div class="w-px bg-gray-300  h-full" />
        <div class="flex items-center px-10">
          <el-button>保存</el-button>
          <el-button>预览</el-button>
          <el-button>取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  components: {},
  mixins: [],
  extends: {},
  filters: {},
  provide: {},
  inject: [],
  props: {},
  computed: {},
  watch: {},
  data() {
    return {}
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
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
