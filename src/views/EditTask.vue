<template>
    <div class = 'container-add'>
        <h2> Edit Task With ID {{ id }}</h2>
        <form action="" @submit.prevent>
            <label for="">Task Name</label>
            <input type="text" v-model = 'taskName' required>
            <label for="">Created on</label>
            <input type="text" v-model = 'date' required readonly>
            <button @click = 'update'>Submit</button>
        </form>
    </div>
</template>

<script>
    import { useRoute, useRouter } from 'vue-router';
    import axios from 'axios';

    export default {
        name: 'EditTask',
        data :() => {
            return {
                id: '',
                taskName: '',
                date: ''
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
                    this.date = response.data.issued;
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
                    task: this.taskName
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
            this.id = route.params.id;
            this.getValues();
        },
    }
</script>

<style scoped>
    .container-add{
        position: relative;
        width: 435px;
        height: 400px;
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