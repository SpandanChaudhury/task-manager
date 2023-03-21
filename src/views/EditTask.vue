<template>
    <div class = 'container-add'>
        <router-link to = '/home'>Back</router-link>
        <h2> Edit Task With ID {{ id }}</h2>
        <form action="" @submit.prevent>
            <label for="">Task Name</label>
            <input type="text" v-model = 'taskName' required>
            <label for="">Task description</label>
            <input type="text" v-model = 'taskdesc'>
            <label for="">Deadline</label>
            <input type="date" v-model = 'deadline' required>
            <label for="">Status</label>
            <!-- <input type="text" v-model = 'status' required> -->
            <div class="radio">
                <input label = 'pending' type="radio" name="status" value = 'pending' v-model = 'status' required>
                <input label = 'progress' type="radio" name="status" value = 'progress' v-model = 'status' required>
                <input label = 'completed' type="radio" name="status" value = 'completed' v-model = 'status' required>
            </div>

            <label for="">Created on</label>
            <input type="date" v-model = 'created' required readonly>
            <button @click = 'update'>Submit</button>
        </form>
    </div>
</template>

<script>
    import { useRoute, useRouter } from 'vue-router';
    import axios from 'axios';
    import { getToken } from "../../services/token.js";

    export default {
        name: 'EditTask',
        data :() => {
            return {
                id: '',
                user: '',
                taskName: '',
                created: '',
                deadline: '',
                status: '',
                taskdesc: ''
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
        methods: {
            getValues()
            {
                const url = 'http://localhost:3300/edit/' + this.id;
                axios.get(url)
                .then(response => {
                    console.log(response);
                    this.taskName = response.data.task;
                    this.created = response.data.created.slice(0, 10);
                    this.deadline = response.data.deadline.slice(0, 10);
                    this.status = response.data.status;

                })
                .catch(error => {
                    console.log(error);
                })
            },
            update()
            {
                // console.log(this.taskName);
                const url = 'http://localhost:3300/update/' + this.id;
                const data = {
                    task: this.taskName,
                    deadline: this.deadline,
                    status: this.status
                }
                axios.post(url, data)
                .then(response => {
                    console.log(response);
                    if(response.status == 200)
                        this.redirect();
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        mounted(){
            const route = useRoute();
            const router = useRouter();
            this.user = getToken('user');
            if(this.user == undefined)
                router.push('/');
            this.id = route.params.id;
            this.getValues();
        },
    }
</script>

<style scoped>
    .container-add{
        position: relative;
        width: 435px;
        height: 600px;
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
    .radio {
        
        border-radius: 3px;
        
        background: #ecf0f3;
        padding: 10px;
        padding-left: 20px;
        height: 30px;
        font-size: 14px;
        border-radius: 50px;
        box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
        /* box-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3),
            0 0 0 3px rgba(185, 185, 185, 0.3); */
        /* position: relative; */
    }

    .radio input {
        
        width: auto;
        height: 100%;
        display: inline-block;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        cursor: pointer;
        border-radius: 2px;
        padding: 4px 8px;
        background: white;
        color: black;
        font-size: 14px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        transition: all 100ms linear;
    }

    .radio input:checked {
        background-image: linear-gradient(180deg, #95d891, #74bbad);
        color: #fff;
        box-shadow: 0 1px 1px #0000002e;
        text-shadow: 0 1px 0px #79485f7a;
    }

    .radio input:before {
        content: attr(label);
        display: inline-block;
        text-align: center;
        width: 100%;
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
</style>