<template>
    <div>
        <h2>delete page - {{ id }}</h2>

    </div>
</template>

<script>
    import { useRoute, useRouter } from 'vue-router';
    import { getToken } from '../../services/token.js';
    import axios from 'axios';
    export default {
        name: 'DeleteTask',
        data: () => {
            return {
                id: '',
                user: null
            }
        },
        setup(){
            const router = useRouter();
            function redirect()
            {
                router.push('/home');
            }
            function login_error()
            {
                router.push('/');
            }
            return {
                redirect,
                login_error
            }
        },

        methods:  {
            delete()
            {
                const url = 'http://localhost:3300/delete/' + this.id;
                axios.get(url)
                .then(response => {
                    console.log(response);
                    if(response.status == 200)
                        this.redirect();
                })
                .catch(error => {
                    console.log(error);
                })
                // console.log(this.id)
            }
        },
        mounted(){
            const route = useRoute();
            this.user = JSON.parse(getToken());
            console.log(this.user);
            if(this.user == null || this.user == undefined)
                this.login_error();
            else
            {
                this.id = route.params.id;
                this.delete();
            }
           
            
        }
    }
</script>

<style scoped>

</style>