import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Task from '@/components/Task/Task'
import Modal from '@/components/Modal/Modal'

function TaskList(props) {

  const [statusModal, setStatusModal] = useState(false)
  const [newTaskText, setNewTaskText] = useState('')

  function handleConfirm(){
    if(newTaskText.trim() !== ''){
      const newTask = {
        title: newTaskText,
        id: uuidv4()
  
      }
      props.setTasks([...props.tasks, newTask])
      setStatusModal(false)
      setNewTaskText('')
    }

  }
  return (
      <>
        {props.tasks.map((tasks) => (
            <Task 
              name={tasks.title}
              setTasks={props.setTasks}
              id={tasks.id}
              tasks={props.tasks}
            />
          ))}
        <button onClick={() => setStatusModal(true)}> + </button>
        {statusModal && 
          <Modal 
            title='Adicionar tarefa'
            editValue={setNewTaskText}
            action='Adicionar'
            statusModal={setStatusModal}
            buttonAction={handleConfirm}
          />}
      </>
  )
}

export default TaskList