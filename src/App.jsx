import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import TodoControls from '@/components/TodoControls/TodoControls'
import TaskList from '@/components/TaskList/TaskList'

function App() {

  const [Tasks, setTasks] = useState([
    {title: "Tarefa 1",
      id: uuidv4()
    },
    {title: "Estudar POO",
      id: uuidv4()
    },
    {title: "Fazer conciliação",
      id: uuidv4()
    },
    {title: "Terminar CSS",
      id: uuidv4()
    }
  ]);

  return (
    <>
      <div className='container'>
        <TodoControls/>
        <TaskList tasks={Tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
