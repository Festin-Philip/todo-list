import { createRouter, createWebHistory } from "vue-router";
// import Vue from 'vue'
// import Router from 'vue-router'
import Update from '@/components/update.vue'
import Add from '@/components/add.vue'
// import Navbar from '@/components/navbar.vue'
// import HomePage from '@/components/home.vue'
import List from '@/components/list.vue'
import Login from '@/components/login.vue'



  const routes= [
    {
      path: '/home',  
      name: 'ListTodo',
        component: List
    },
    {
        path: '/add/',
        name: 'AddTodo',
        component: Add
      },
      {
        path: '/update/:id',
        name: 'UpdateTodo',
        component: Update
      },
      {
        path:'/',
        name:'LoginTodo',
        component:Login
      }
     
     
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;