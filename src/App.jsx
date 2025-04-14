import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import TodoControls from '@/components/TodoControls/TodoControls'
import TaskList from '@/components/TaskList/TaskList'
import Modal from '@/components/Modal/Modal'


function App() {
  const [taskEditing, setEditingTask] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [actionModal, setActionModal] = useState('')
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

  const [taskText, setTaskText] = useState('')

  function handleConfirm(){
    if(actionModal == 'Adicionar'){
      if(taskText.trim() !== ''){
        const newTask = {
          title: taskText,
          id: uuidv4()
   
        }
        setTasks([...Tasks, newTask])
        setModalIsOpen(false)
        setTaskText('')
      }
  
    }else if(actionModal == 'Editar'){
      const updatedTasks = Tasks.map(Task => {
        if(Task.id === taskEditing) {
            return { ...Tasks, title: taskText}
        }
        return Task
    })
    setTasks(updatedTasks)
    setModalIsOpen(false)
    setTaskText('')
    setEditingTask(null)
}
    }
  return (
    <>
      <div className='containerApp'>

        <TodoControls/>

        <TaskList 
          tasks={Tasks} 
          setTasks={setTasks} 
          setModalIsOpen={setModalIsOpen}
          setActionModal={setActionModal}
          setTaskText={setTaskText}
          setEditingTask={setEditingTask}
        />

      {modalIsOpen && 
        <Modal 
          actionModal={actionModal}
          actionConfirm={handleConfirm}
          taskText={taskText}
          setTaskText={setTaskText}
          setModalIsOpen={setModalIsOpen}

        />}

      </div>
    </>
  )
}

export default App
