<template>
    <div>
        <div class="container">
            <h2 style = 'text-align: center;'>tasks till now</h2>
            <table class = 'unfixed-table'>
                <thead>
                    <tr>
                        <!-- <th>Task ID</th> -->
                        <th>Task</th>
                        <th>Issue Date</th>
                        <th> Deadline </th>
                        <th> Status </th>
                        <th> Actions </th>
                        <!-- <th>User</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = '(task, index) in tasks' :key='task.taskid'>
                        <!-- <td> {{ task.taskid }} </td> -->
                        <td> {{ task. task}} </td>
                        <td> {{ task. created.slice(0, 10) }} </td>
                        <td> {{ task.deadline.slice(0, 10) }} </td>
                        <td> {{ task.status }} </td>
                        <td> 
                            <button class = 'button' @click = 'editTask(task.taskid, index)'>
                                Edit
                                <!-- <router-link  to = '/edit:'>Edit</router-link> -->
                            </button>
                            <button class = 'button' @click = 'deleteTask(task.taskid, index)'>
                                <!-- <router-link  to = '/delete:{{task.taskid}}'>Delete</router-link> -->
                                Delete
                            </button>
                        </td>
                        <!-- <td> {{ task. firstname }} {{ task. lastname }} </td> -->
                        <!-- <td>  </td> -->
                        <!-- <h2> {{ task. }} </h2>
                        <h2> {{ task. }} </h2>
                        <h2> {{ task. }} </h2> -->
                    </tr>
                </tbody>
             
            
            </table>
        </div>
        
        <!-- <div v-for = 'task in tasks' :key="task.taskid">
            <h2> {{ task.task }} </h2>
            <p> {{ task.issuedate }} </p>
        </div> -->
    </div>
</template>

<script>
    import axios from 'axios';
    import { getToken } from '../../services/token.js';
    // import { setTokenGen, getTokenGen } from '../../services/token-general.js';
    import { useRouter } from 'vue-router';
    export default {
        name: 'ViewTask',
        data: () => {
            return {
                tasks: [],
                user: null
            }
        },
        setup() {
            const router = useRouter();

            function editTask(id, index)
            {
                console.log('edit:/' + id);
                console.log(index);
                // router.push({
                //     name: 'edit',
                //     params: { id }
                // });
                router.push('/edit/' + id);

            }
            function deleteTask(id, index)
            {
                console.log('delete:/' + id);
                console.log(this.tasks);
                // this.tasks.splice(index, 1);
                console.log(index);
                router.push('/delete/' + id);
                // router.push({
                //     path: 'delete',
                //     query : { 'id' : id}
                // });
            }
            function redirect()
            {
                router.push('/');
            }
            return {
                editTask,
                deleteTask,
                redirect
            }
        },
        created(){
            this.user = JSON.parse(getToken('user'));
            if(this.user == undefined)
            {
                this.redirect();
            }
            else
            {
                console.log(this.user);
                // this.tasks = JSON.parse(getTokenGen('tasks'));
                // console.log('tasks received- ' + this.tasks);
                // if(this.tasks == undefined)
                // {
                    const url = 'http://localhost:3300/get-task';
                    const data = {
                        id: this.user['id']
                    };
                    axios.post(url, data)
                    .then(response => {
                        console.log(response.data);
                        this.tasks = response.data;
                        // setTokenGen('tasks', JSON.stringify(response.data));
                        console.log(this.tasks);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                // }
                // console.log(this.tasks);

            }

           

        }
    }
</script>

<style scoped>
    .button{
        color: white;
        display: inline-block;
        text-align: center;
        margin-top: 20px;
        margin-right: 20px;
        width: 80px;
        background: #1DA1F2;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
        font-weight: 900;
        box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
        transition: 0.5s;
    }
    table {
			border-collapse: collapse;
			width: 100%;
		}
		th, td {
			padding: 25px;
			text-align: left;
            border: 1px solid white;
			border-bottom: 1px solid #ddd;
		}
		tr:nth-child(even) {
			background-color: #f2f2f2;
		}
		th {
			background-color: #4CAF50;
			color: white;
		}
        .container {
        position: relative;
        width: 600px;
        /* height: 500px; */
        border-radius: 20px;
        margin-top: 50px;
        padding: 40px;
        margin-bottom: 40px;
        box-sizing: border-box;
        background: #ecf0f3;
        box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        text-align: center;
        text-overflow: scroll;
        }
</style>