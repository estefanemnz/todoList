import React from 'react'
import { useState, useEffect } from 'react'

import styles from './TaskList.module.css'

import Task from '@/components/Task/Task'

function TaskList(props) {

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if(storedTasks){
      props.setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(props.tasks))
  }, [props.tasks])

  return (
      <div className={styles.containerTasks}>
        {props.tasks.map((tasks) => (
            <Task 
              name={tasks.title}
              setTasks={props.setTasks}
              id={tasks.id}
              tasks={props.tasks}
              setModalIsOpen={props.setModalIsOpen}
              setActionModal={props.setActionModal}
              setTaskText={props.setTaskText}
              setEditingTask={props.setEditingTask}
              setIsCompleted={props.setIsCompleted}
            />
          ))}
       <div className={styles.buttonContainer}>
          <button 
            onClick={() => {
              props.setModalIsOpen(true)
              props.setActionModal('ADICIONAR')
              }} 
            className={styles.addButton}>
            
          </button>
        </div>
      </div>
  )
}

export default TaskList