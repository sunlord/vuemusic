import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body) /* 将fastclick Attach到整个body内，这样整个body内的点击没有300ms的延迟了 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
