import router from '@/router'
export default {
  inserted(el, binding, vnode) {
    el.addEventListener('click', () => {
      router.go(-1)
    })
  }
}
