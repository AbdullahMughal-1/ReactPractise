import React, { useState } from 'react'

const App = () => {
const [text, settext] = useState("")
const [tasks, settasks] = useState([])



  const handleChange = (e)=>{
    settext(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(text.trim() === ''){
      console.log("Cannot append nothing");
    }else{
      const newTask={
        id: Date.now(),
        text : text,
        completed: false
      }

      settasks([...tasks, newTask])
      settext("")
      console.log(tasks)
    }

    
  }

  const toggleTask = (id) =>{
      settasks(
        tasks.map((task)=>(
          task.id === id ? {...task , completed: !task.completed}:task
        ))
      )
    }

    const deletetsk = (id)=>{
          settasks(tasks.filter((task) => task.id !==id))
  
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} type="text" placeholder='Type your idea' />
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task)=>(
          <li key={task.id}>
            <input type="checkbox" 
            checked={task.completed}
            onChange={()=>{toggleTask(task.id)}}
            />
            <span style={{textDecoration: task.completed ? "line-through": 'none'}}>
            {task.text}
            </span>
            <button onClick={()=>{deletetsk(task.id)}} >Delete</button>
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default App
