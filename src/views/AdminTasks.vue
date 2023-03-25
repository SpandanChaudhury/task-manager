<template>
    <div class = 'container'>
        <h3>task list</h3>
        <table class = 'unfixed-table'>
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Task</th>
                    <th>Issue Date</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
           <tbody>
                <tr v-for = 'task, index in tasks' :key='task.taskid'>
                    <td> {{ task.taskid }} </td>
                    <td> {{ task. task}} </td>
                    <td> {{ task.created.slice(0, 10)}} </td>
                    <td> {{ task. firstname }} {{ task. lastname }} </td>
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
                    <!-- <td>  </td> -->
                    <!-- <h2> {{ task. }} </h2>
                    <h2> {{ task. }} </h2>
                    <h2> {{ task. }} </h2> -->
                </tr>
           </tbody>
           
         
        </table>
        
    </div>
</template>

<script>
    import axios from 'axios';
    import { useRouter } from 'vue-router';
    export default {
        name: 'AdminTasks',
        data: () =>{
            return {
                tasks: [],
            }
        },
        setup() {
            const router = useRouter();
            function editTask(id, index)
            {
                console.log('edit task with id: ' + id + index);
                
                router.push('/edit/' + id);
            }
            function deleteTask(id, index)
            {
                console.log('delete task with id: ' + id + index);
                router.push('/delete/' + id);
            }
            return {
                editTask,
                deleteTask
            }
        },

        created(){
            const url = 'http://localhost:3300/admin-getall';
            axios.post(url, {})
            .then(response => {
                console.log(response.data);
                this.tasks = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
</script>

<style scoped>
     .button{
        color: white;
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
			padding: 12px;
			text-align: left;
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
        width: 650px;
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