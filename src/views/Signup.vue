<template>
  <div class="container" style = 'height: 600px; margin-top: 20px'>
    <div class="brand-title">Task Manager</div>
        <!-- <h2>
          
          this is teh value - {{ isDisabled }}
          
        </h2>   -->
    <!-- <h1>This is the signup page</h1> -->
    <div class="inputs">

      <form action="" @submit.prevent>
          <label>First Name </label>
          <input type="text" placeholder = 'firstname' v-model = 'firstname' required>
          <label>Last Name </label>
          <input type="text" placeholder = 'lastname' v-model = 'lastname' required>
          <label> Email </label>
          <input type="email" placeholder = 'email' v-model = 'email' required>
          <label> Password </label>
          <input type="text" placeholder = 'password' v-model = 'password' required>
          <label for="">Confirm Password</label>
          <input type="text" placeholder  = 'confirm password' v-model = 'cpassword' required>
          <button type = 'submit' :disabled = 'isDisabled' @click = 'signup'>Signup</button>
        
      </form>
    </div>
    
    <router-link class = 'anchor-left' to = '/'>Already a user?Login</router-link>

  </div>
</template>
<script>
  import axios from 'axios';
  import { setToken } from '../../services/token';
  import { useRouter } from 'vue-router';
  // import { watch } from 'vue';
  export default{
    name: 'Sign_up',
      data: () => {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        cpassword: '',
        // isDiabled: false
        
      }
    },
    setup(){
      const router = useRouter();
      // const password = ref('');
      function redirect()
      {
        router.push('/home');
      }
      function reload()
      {
        location.reload();
      }
      // const passwatch = watch(this.password, (newV) => {
      //   console.log(newV);
      // })
      return {
        redirect,
        reload,
        // passwatch,
        // password
      }
    },
  
    watch : {
      password(newV)
      {
        // console.log(newV);
        const upper = /[A-Z]/;
        const lower = /[a-z]/;
        const num = /[0-9]/;
        const special = /[!@#$%*^]/;
          // console.log('accepted');

          console.log(newV.search(upper));
          console.log(newV.search(lower));
          console.log(newV.search(num));
          console.log(newV.search(special));
        
        if(newV.search(upper) >= 0 && newV.search(lower) >= 0 && newV.search(num) >= 0 && newV.search(special) >= 0)
          this.isDiabled = false;
      },
      cpassword(newvalue)
      {
        if(newvalue == this.password && this.password != '')
          this.isDisabled = false;
      }
    },
    methods: {
      signup(){
        const url = 'http://localhost:3300/signup';
        const data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        };
        axios.post(url, data)
        .then(response => {
          console.log(response.data.user);
          setToken(JSON.stringify(response.data.user));
          this.redirect();

        })
        .catch(error => {
          console.log(error.response.data.error);
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
  height: 650px;
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
