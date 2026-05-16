import React from 'react'
import ProfileCard from './components/ProfileCard';
import  { useState } from 'react';
import './App.css';

function App() {

const appTitle = "Smart Student Task Manager"
const studentName = "Tannu";


// about use use.state.

const [taskInput, setTaskInput] = useState("");
const [studySessions, setStudySessions] = useState(0);
// task se realted
const[tasks, setTasks] = useState([]);






// event 1

const handleInputChange = (e) => {
  setTaskInput(e.target.value)
}

// event 2

const handleAddTask = () => {
  if (taskInput.trim() === "") return;
  setTasks([...tasks, taskInput]);
  setTaskInput("");
}


const handleDeleteTask = (indextoDelete) => {
  const updatedTasks = tasks.filter((task,index) => index !== indextoDelete);
  setTasks(updatedTasks);
}






  return (
    // home
    <div className='main-container'>
      <h1>{appTitle}</h1>
      <p><b><h3>Welcome to your dashboard</h3> </b>{studentName}</p>

     {/*profile  */}

      <ProfileCard name="Tannu" age = "19"/>   
<hr/>
{/* Study Counter */}

<div>
  <h3>Study Counter</h3>
<p>Total Study Sessions: {studySessions}</p>

<button onClick = {() => setStudySessions(studySessions + 1)}>Increment(+)</button>
<button onClick = {() => setStudySessions(studySessions - 1)}>Decrement(-)</button>
<button onClick = {() => setStudySessions(0)}>Reset</button>



</div>
<hr/>


      {/* Task Management */}
    <div>
      <h3>Task Management Area</h3>
        <input type='text' placeholder='Enter a new task'
        
        value={taskInput}    onChange = {handleInputChange}/>
     

      {/* on click working */}
      <button onClick={handleAddTask}>Add Task(+)</button>


    </div>
    <br/>
    <hr/>

    {/* condition */}
    <div>
      <h4>Todo List</h4>
      {tasks.length === 0 ? (<p>No task available</p>) : (<ul>

        {tasks.map((task,index) => (



<li key={index}>
  {task}
  <button onClick={() => handleDeleteTask(index)}>Delete</button>


</li>
        ))}








      </ul>)}
    </div>



































</div>










 
  )
}

export default App
