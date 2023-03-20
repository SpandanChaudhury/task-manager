<template>
    <div class = 'container-add'>
        <h3>add task section</h3>
        <form action="" @submit.prevent>
            <input type="text" placeholder = 'task name' v-model = 'task' required>
            <button type = 'submit' @click = 'submittask'>Add Task</button>
        </form>
    </div>
    
</template>
<script>
    import { useRouter } from 'vue-router';
    import { getToken } from '../../services/token.js';
    import axios from 'axios';
    export default{
        name: 'AddTask',
        setup()
        {
            const router = useRouter();
            function redirect()
            {
                location.reload();
                router.replace('/home');
            }
            return {
                redirect
            }
        },
        data: () => {
            return {
                task: '',
                user: null,
                date: '',
                // router: null
            }
        },
        created()
        {
            var d = new Date();
            console.log(d);
            var dt = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            this.date = year + '-' + month + '-' + dt;
            console.log('today date- ' + this.date);
            this.user = JSON.parse(getToken('user'));
            console.log(this.user);
        },
        methods: {
            submittask()
            {
                const url = 'http://localhost:3300/add-task';
                
                const data = {
                    uid: this.user['id'],
                    task: this.task,
                    date: this.date
                };
                axios.post(url, data)
                .then(response => {
                    // console.log(response);
                    if(response.status == 200)
                    {
                        console.log('redirecting');
                        this.task = '';
                        // cannot use useRouter() here
                        this.redirect();

                    }
                })
                .catch(error => {
                    console.log(error);
                });
                // this.task = '';
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
.container-add{
    position: relative;
    width: 435px;
    height: 250px;
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
/* .container {
  position: relative;
  width: 35px;
  height: 50px;
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
} */

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