<template>
    <div class = 'container'>
        <div class="brand-title">Task Manager</div>
        <!-- <h2>this is the admin login</h2> -->
        <div class="inputs">
            <form action="" @submit.prevent>
                <label for="">Email</label>
                <input type="text" v-model = 'email' placeholder = 'admin email' required>
                <label for="">Password</label>
                <input type="text" v-model = 'password' placeholder = 'password'>
                <button type = 'submit' @click = 'submit'>Login</button>
            </form>
        </div>
        <router-link class = 'anchor-right' to = '/'>Not Admin?</router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    import { useRouter } from 'vue-router';
    import { setToken, getToken } from '../../services/token-admin.js';
    export default {
        name: 'AdminLogin',
        data: () => {
            return {
                email: '',
                password: '',
                admin: ''
            }
        },
        created(){
            this.admin = JSON.parse(getToken('admin'));
            const router = useRouter();
            if(this.admin == null)
                router.push('/admin-login');
            else
                router.push('/admin-home');
        },
        methods: {
            submit()
            {
                const url = 'http://localhost:3300/admin-login';
                const data = {
                    email: this.email,
                    password: this.password
                };

                axios.post(url, data)
                .then(response => {
                    // console.log(response.data.admin);
                    setToken(JSON.stringify(response.data.admin));
                    location.reload();
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');

    input {
    caret-color: red;
    }

    body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: #ecf0f3;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    place-items: center;
    overflow: hidden;
    font-family: poppins;
    }

    .container {
    position: relative;
    width: 350px;
    height: 500px;
    border-radius: 20px;
    margin-top: 50px;
    padding: 40px;
    box-sizing: border-box;
    background: #ecf0f3;
    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    text-align: center;
    }

    .brand-logo {
    height: 100px;
    width: 100px;
    background: url("https://img.icons8.com/color/100/000000/twitter--v2.png");
    margin: auto;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
    }

    .brand-title {
    margin-top: 10px;
    font-weight: 900;
    font-size: 1.8rem;
    color: #1DA1F2;
    letter-spacing: 1px;
    }

    .inputs {
    text-align: left;
    margin-top: 30px;
    }

    label, input, button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    }

    label {
    margin-bottom: 4px;
    }

    label:nth-of-type(2) {
    margin-top: 12px;
    }

    input::placeholder {
    color: gray;
    }

    input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    }

    button {
    color: white;
    margin-top: 20px;
    background: #1DA1F2;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
    }

    button:hover {
    box-shadow: none;
    }

    a {
    position: absolute;
    font-size: 8px;
    bottom: 4px;
    right: 4px;
    text-decoration: none;
    color: black;
    background: yellow;
    border-radius: 10px;
    padding: 2px;
    }
    .anchor-right{
    position: absolute;
    font-size: 13px;
    bottom: 4px;
    right: 4px;
    text-decoration: none;
    color: black;
    background: yellow;
    border-radius: 10px;
    padding: 2px;
    }
    .anchor-left{
    position: absolute;
    text-align: left;
    font-size: 13px;
    text-overflow: ellipsis;
    bottom: 4px;
    right: 250px;
    text-decoration: none;
    color: black;
    background: yellow;
    border-radius: 10px;
    padding: 2px;
    }

    h1 {
    position: absolute;
    top: 0;
    left: 0;
    }
</style>