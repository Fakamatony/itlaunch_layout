import { createRouter, createWebHistory } from 'vue-router'
import VMainWrapper from '@/components/pages/v-main-wrapper.vue';
import VAbout from '@/components/pages/v-about/v-about.vue';
import VSales from '@/components/pages/v-sales.vue';
import VCerts from '@/components/pages/v-certs.vue';
import VContacts from '@/components/pages/v-contacts.vue';
import VDelivery from '@/components/pages/v-delivery.vue';
import VLocalBrands from '@/components/pages/v-brands/v-local-brands.vue';
import VForeignBrands from '@/components/pages/v-brands/v-foreign-brands.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: VMainWrapper
    },
    {
      path: '/about',
      name: 'about',
      component: VAbout
    },
    {
      path: '/sales',
      name: 'sales',
      component: VSales
    },
    {
      path: '/certs',
      name: 'certs',
      component: VCerts
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: VContacts
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: VDelivery
    },
    {
      path: '/local-brands',
      name: 'local-brands',
      component: VLocalBrands
    },
    {
      path: '/foreign-brands',
      name: 'foreign-brands',
      component: VForeignBrands
    },
  ]
})
export default router
