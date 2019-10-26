<template>
  <div class="home">
    <draggable
      class="dragArea list-group"
      :list="widgets"
      :group="{ name: 'people', pull: 'clone', put: false }"
      @change="log"
    >
      <el-button
        v-for="element in widgets"
        :key="element.name"
        class="list-group-item"
      >
        {{ element.name }}
      </el-button>
    </draggable>
  </div>
</template>

<script>
import MyButton from '../components/MyButton.vue'
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
export default {
  name: 'home',
  components: {
    MyButton,
    draggable
  },
  computed: {
    ...mapGetters('left', ['widgets'])
  },
  methods: {
    log(evt) {
      console.log(evt)
    }
  }
}
</script>
