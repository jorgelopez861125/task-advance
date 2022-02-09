
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputTask, setInputTask] = useState({description:''});
  const [tasks, setTasks] =useState([]);
  const [id, setId] = useState(0);

  const submitHandler = (e) =>{
    e.preventDefault();
    setId(id + 1);
    setTasks([...tasks, inputTask]);
  };

  const createTaskHandler = (text) =>{
    setInputTask({id, description: text, complete: false})
  };

  const deleteTask = (id) =>{
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  const CompleteHandler = (id) =>{
    const newArray = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    })
    setTasks(newArray);
  }
  return (
    <div className="conatiner">
     <h1>Task Adavanced</h1>
     <h3>Enter a Task</h3>
     <form onSubmit = {submitHandler}>
       <input type="text" value={inputTask.description} placeholder='Enter a Task' onChange={(e) => createTaskHandler(e.target.value)}/>
     <button type='submit'>ADD TASK</button>
     </form>
     <div className='tasks-container'>
       {tasks.map((item, index) =>(
        <div key = {index} className="task-card">
          <button id='delete' type='button' onClick={() =>deleteTask(item.id)}>Delete</button>
          <p className={item.complete ? 'task-complete' : ''}>{item.description}</p>
          <button className={item.complete ? 'btn-incomplete' : 'btn-complete'} type='button' onClick={() => CompleteHandler(item.id)}>{item.complete ? 'Incomplete' : 'Completar'}</button>
        </div>
         
       ))

       }
     </div> 
    </div>
  );
}

export default App;
