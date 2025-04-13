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
    {title: "Tarefa 938583",
      id: uuidv4()
    },
    {title: "Tarefa 389593",
      id: uuidv4()
    },
    {title: "Tarefa 4",
      id: uuidv4()
    }
  ]);

  return (
    <>
      <div className='containerApp'>
        <TodoControls/>
        <TaskList tasks={Tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
