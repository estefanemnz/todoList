import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import TodoControls from '@/components/TodoControls/TodoControls'
import TaskList from '@/components/TaskList/TaskList'
import Modal from '@/components/Modal/Modal'


function App() {

  const [selectedOption, setSelectedOption] = useState('todas')
  const [taskEditing, setEditingTask] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [actionModal, setActionModal] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  const [Tasks, setTasks] = useState([
    {title: "Tarefa 1",
      id: uuidv4(),
      isCompleted: isCompleted
    },
    {title: "Tarefa 2",
      id: uuidv4(),
      isCompleted: isCompleted
    },
    {title: "Tarefa 3",
      id: uuidv4(),
      isCompleted: isCompleted
    },
    {title: "Tarefa 4",
      id: uuidv4(),
      isCompleted: isCompleted
    }
  ]);

  const [taskText, setTaskText] = useState('')

  function handleConfirm(){
    if(actionModal == 'ADICIONAR'){
      if(taskText.trim() !== ''){
        const newTask = {
          title: taskText,
          id: uuidv4()
   
        }
        setTasks([...Tasks, newTask])
        setModalIsOpen(false)
        setTaskText('')
      }
  
    }else if(actionModal == 'EDITAR'){
      const updatedTasks = Tasks.map(Task => {
        if(Task.id === taskEditing) {
            return { ...Task, title: taskText}
        }
        return Task
    })
    setTasks(updatedTasks)
    setModalIsOpen(false)
    setTaskText('')
    setEditingTask(null)}

}

function handleKeyDown(e){
  if(e.key == 'Enter'){
    e.preventDefault()
    handleConfirm()
  }
                                                                                                                                   
}

  return (
    <>
      <div className='containerApp'>

        <TodoControls
          setSelectedOption={setSelectedOption}
          handleSelect={handleSelect}
        />
        <TaskList 
          tasks={
            selectedOption === 'todas' ? Tasks
            : selectedOption === 'completas' ? Tasks.filter(task => task.isCompleted)
            : Tasks.filter(task => !task.isCompleted)
          } 
          setTasks={setTasks} 
          setModalIsOpen={setModalIsOpen}
          setActionModal={setActionModal}
          setTaskText={setTaskText}
          setEditingTask={setEditingTask}
          setIsCompleted={setIsCompleted}
        />

        {modalIsOpen && 
          <Modal 
            actionModal={actionModal}
            actionConfirm={handleConfirm}
            taskText={taskText}
            setTaskText={setTaskText}
            setModalIsOpen={setModalIsOpen}
            onKeyDown={handleKeyDown}
          />}
      </div>
    </>
  )
}

export default App
