import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sign_up from '../views/Signup.vue';
import LoginPage from '../views/LoginPage.vue';
import AddTask  from '../views/AddTask.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminHome from '../views/AdminHome.vue';
import EditTask from '../views/EditTask.vue';
import DeleteTask from '../views/DeleteTask.vue';

const routes = [
  {
    path: '/',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: Sign_up
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-task',
    name: 'addtask',
    component: AddTask
  },
  {
    path: '/admin-login',
    name: 'adminlogin',
    component: AdminLogin
  },
  {
    path: '/admin-home',
    name: 'adminHome',
    component: AdminHome
  },
  {
    path: '/edit/:id',
    name: 'editTask',
    component: EditTask
  },
  {
    path: '/delete/:id',
    name: 'deleteTask',
    component: DeleteTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
