<template>
    <div>
        <h2>delete page - {{ id }}</h2>

    </div>
</template>

<script>
    import { useRoute, useRouter } from 'vue-router';
    import axios from 'axios';
    export default {
        name: 'DeleteTask',
        data: () => {
            return {
                id: ''
            }
        },
        setup(){
            const router = useRouter();
            function redirect()
            {
                router.push('/home');
            }
            return {
                redirect
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
            this.id = route.params.id;
            this.delete();
            
        }
    }
</script>

<style scoped>

</style>