<!-- <script>
//export default{
  data(){
   return{
    name:"kazeem Lawal",
    status:'active',
    tasks:['Task 1','Task 2','Task 3'],
    link:'https://bugsync.cloud'
   }
  },
  methods:{
    toggleStatus(){
      if(this.status === 'pending')this.status = 'inactive'
      else if(this.status === 'active') this.status = 'pending'
      else this.status = 'active'
    }
  }
}
</script>

<template>
  <h1>Vue Jobs</h1>
  <p>{{ name }}</p>
  <span v-if="status==='active'">user is active</span>
  <span v-else-if="status === 'pending'">user is pending</span>
  <span v-else>User is inactive</span>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="index">{{ task}}</li>
  </ul>
  <a :href="link">Click to BugSync</a>
  <button @click="toggleStatus">change status</button>
</template>
<script setup>
import { ref,onMounted } from 'vue';

    const name = ref('john Doe');
    const status = ref('active');
    const tasks = ref(['task1', 'task2', 'task3']);
    const link = ref('https://bugsync.com');
    const toggleStatus = () => {
      status.value = status.value === 'active'? 'pending' : 'active';
    }
    const newTask = ref('')

    const addTask = () => {
      if(newTask.value.trim() !==""){
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    }
    
    const removeTask=(index)=>{
      tasks.value.splice(index, 1);
    }

  onMounted(async()=>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();

      tasks.value = data.map((task)=> task.title)
    }catch(error){
      console.log('Error fetching data');
      throw new Error('Failed to fetch data');
    }
  })
</script>

<template>
  <h1>Vue Jobs</h1>
  <p>{{ name }}</p>
  <span v-if="status==='active'">user is active</span>
  <span v-else-if="status === 'pending'">user is pending</span>
  <span v-else>User is inactive</span>

  <form @submit.prevent="addTask">
    <label>Add tasks</label>
    <br/>
    <input for="newTask" id=""newTaskn name="newTask" v-model="newTask" placeholder="add a task"/>
    <button type="submit">Submit</button>
  </form>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="index">
      <span>{{ task}}</span>
      <button @click="removeTask(index)">
        Remove
      </button>

    </li>
  </ul>
  <a :href="link">Click to BugSync</a>
  <button @click="toggleStatus">change status</button>
</template> -->