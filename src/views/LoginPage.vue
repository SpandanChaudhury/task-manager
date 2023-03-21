<template>
    <!-- <div class = 'central'>
       <h2>welcome to login page</h2>
       <h4>Login</h4>
       <div  class = 'input-div'>
            <form action="" @submit.prevent>
                <input type="email" v-model = 'email' placeholder = 'email' required> <br> 
                <input type="password" v-model = 'password' placeholder = 'password' required> <br> <br>
                <button @click = 'login' type = 'submit'>Login</button>
            </form>
            <router-link style = 'padding-right: 50px' to = '/admin-login'>Admin??</router-link> 
            <router-link to = '/signup'>New user? Signup</router-link>

       </div>
        

    </div> -->
    
<!-- <center> -->
<div class="container">
  
    <div class="brand-title">Task Manager</div>
    <div class="inputs">
        <form action="" @submit.prevent>
            <label>EMAIL</label>
            <input type="email" placeholder="example@test.com" v-model = 'email' required/>
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" v-model = 'password' required/>
            <button @click = 'login' type="submit">LOGIN</button>

        </form>
    </div>
    <!-- <div class=""> -->
        <router-link class = 'anchor-right' to = '/admin-login'>Admin??</router-link> 
        <router-link class = 'anchor-left' to = '/signup'>New user? Signup</router-link>
        
    <!-- </div> -->
 
</div>
<!-- </center> -->

</template>
<script>
    import axios from 'axios';
    import { authenticate } from '../../services/authentication.js';
    import { useRouter } from 'vue-router';
    import { setToken } from '../../services/token.js';
    export default{
        name: 'LoginPage',
        data: () => {
            return {
                email: '',
                password: '',
                user: null,
            }
        },
        created() {

            this.user = JSON.parse(authenticate());
            const router = useRouter();
            if(this.user != null)
                router.push('/home');
            else
                router.push('/');
            // else    
            //     location.reload();
                // router.push('/');
            // else
        },
        methods: {
            login() {
                const url = 'http://localhost:3300/login';
                const data = {
                    email: this.email,
                    password: this.password
                };
                console.log(data);
                axios.post(url, data)
                .then(response => {
                    console.log(response.data);
                    setToken(JSON.stringify(response.data.user));
                    // console.log(getToken(this.user));
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
   /* @import '../assets/form.css'; */
   
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');

    input {
    caret-color: red;
    }

    body {
    margin: 0;
    width: 100vw;
    /* height: 100vh; */
    background: #ecf0f3;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    place-items: center;
    overflow: scroll;
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