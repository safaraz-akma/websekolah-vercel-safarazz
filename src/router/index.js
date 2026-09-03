// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'


import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import AboutPage from '../pages/AboutPage.vue'
const router = createRouter({
 history: createWebHistory(),
 routes: [
 { path: '/', component: LandingPage },
 { path: '/Contact', component: ContactPage },
 { path: '/product', component: ProductPage },
 { path: '/about', component: AboutPage },
 ],
})


export default router



