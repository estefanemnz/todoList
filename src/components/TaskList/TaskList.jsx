import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './TaskList.module.css'

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
      <div className={styles.containerTasks}>
        {props.tasks.map((tasks) => (
            <Task 
              name={tasks.title}
              setTasks={props.setTasks}
              id={tasks.id}
              tasks={props.tasks}
            />
          ))}
        <div className={styles.buttonContainer}>
          <button onClick={() => setStatusModal(true)} className={styles.addButton}></button>
          {statusModal && 
            <Modal 
              title='Adicionar tarefa'
              editValue={setNewTaskText}
              action='Adicionar'
              statusModal={setStatusModal}
              buttonAction={handleConfirm}
            />}
        </div>
      </div>
  )
}

export default TaskList