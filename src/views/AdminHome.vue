<template>
    <div class = 'home'>
        <h2>this is admin home</h2>
        <h2>Welcome, {{ admin.firstname }} {{ admin.lastname }} </h2>
        <button @click = 'logout'>Logout</button>
        <AdminTasks/>
    </div>
</template>

<script>
    import { getToken, clearToken } from '../../services/token-admin.js';
    import { useRouter } from 'vue-router';
    import AdminTasks from './AdminTasks.vue';
    export default {
        name: 'AdminHome',
        components: {
            AdminTasks
        },
        setup(){
            const router = useRouter();
            function redirect()
            {
                router.replace('/admin-login');
            }
            return {
                redirect
            }
        },
        data: () => {
            return {
                admin: {},

            }
        },
        created(){
            this.admin = JSON.parse(getToken('admin'));
            console.log(this.admin);
            const router = useRouter();
            if(this.admin == null)
                router.push('/admin-login');
            else
                console.log('verified');
        },
        methods: {
            logout(){
                clearToken('admin');
                this.admin = {};
                // location.reload();
                this.redirect();
            }
        }
    }
</script>
<style scoped>
     .home{
    margin: 0;
        text-align: center
    }
    .home h2{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
  .home button {
    
      color: white;
      width: 350px;
      /* height: 500px; */
      margin-top: 20px;
      background: #1DA1F2;
      height: 40px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 900;
      box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
      transition: 0.5s;
      margin-left: auto;
      margin-right: auto;

  }
</style>