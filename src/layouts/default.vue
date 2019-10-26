<template>
  <div>
    <div class="flex flex-col h-screen">
      <Head />
      <div class="flex flex-1">
        <Aside />
        <div class="flex flex-1">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import Aside from '@/components/Aside/index.vue'
import Head from '@/components/Head/index.vue'
export default {
  name: 'defaultLayout',
  components: {
    draggable,
    Head,
    Aside
  },
  computed: {
    ...mapGetters('center', ['widgets'])
  },
  methods: {
    log(evt) {
      console.log(evt)
    }
  }
}
</script>

<style>
</style>
