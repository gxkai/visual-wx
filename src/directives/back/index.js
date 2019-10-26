import back from './back'
const install = function(Vue) {
  Vue.directive('back', back)
}

if (window.Vue) {
  window['back'] = back
    Vue.use(install); // eslint-disable-line
}

back.install = install
export default back
