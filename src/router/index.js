import Vue from 'vue'
import VueRouter from 'vue-router'
import MENUS_CONFIG from './nav.config.json'

Vue.use(VueRouter)

const menus = MENUS_CONFIG.reduce((_list, sort) => {
  return _list.concat(sort.list)
}, [])
const routes = menus.reduce(
  (_list, item) => {
    return _list.concat({
      component: resolve => require([`../pages/${item.name}.md`], resolve),
      path: item.path,
      name: item.name,
      meta: {
        title: item.name
      }
    })
  },
  [
    {
      component: resolve => require(['../pages/README.md'], resolve),
      path: '/',
      name: 'flyui',
      meta: {
        title: 'flyui'
      }
    }
  ]
)
console.log(routes)
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title
  next()
})

export default router
