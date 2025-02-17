import { createRouter, createWebHistory } from 'vue-router'
import About_us_story from '@/components/about_us_story.vue'
import About_us_stores from '@/components/about_us_stores.vue'
import Custom_footer from '@/components/custom_footer.vue'
import Shop_page from '@/components/shop_page.vue'

const routes = [
  {
    path: '/',
    name: 'aboutus',
    component: About_us_stores
  },
  {
    path: '/about',
    name: 'about',
    component: About_us_story
  },
  {
    path:'/footer',
    name:'footer',
    component:Custom_footer
  },
  {
    path:'/shop',
    name:'shop',
    component:Shop_page
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router