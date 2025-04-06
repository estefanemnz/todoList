import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'

import TodoControls from '@/components/TodoControls/TodoControls'
import TaskList from '@/components/TaskList/TaskList'
import Modal from '@/components/Modal/Modal'
function App() {

  const [Tasks, setTasks] = useState([
    {title: "Lavar banheiro",
      id: uuidv4()
    },
    {title: "Estudar POO",
      id: uuidv4()
    },
    {title: "Fazer conciliação",
      id: uuidv4()
    },
    {title: "Lavar roupas",
      id: uuidv4()
    }
  ]);

  return (
    <>
      <div >
        <TodoControls/>
        <TaskList tasks={Tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
