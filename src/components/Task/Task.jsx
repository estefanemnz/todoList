import React from 'react'
import { useState } from 'react'
import styles from './Task.module.css'

import { Trash2, Pencil } from 'lucide-react'

import Modal from '@/components/Modal/Modal'

function Task(props) {
    const [statusModal, setStatusModal] = useState(false)
    const [taskText, setTaskText] = useState(props.name)

    function handleConfirm(){
        const updatedTasks = props.tasks.map(task => {
            if(task.id === props.id) {
                return { ...task, title: taskText}
            }
            return task
        })
        props.setTasks(updatedTasks)
        setStatusModal(false)
    }

    function handleDelete(){
        const updatedTasks = props.tasks.filter(task => task.id !== props.id)
        props.setTasks(updatedTasks)

    }
    
  return (
    <div className={styles.Task}>
        <div className={styles.titleTask}>
            <label className={styles.checkboxContainer}>
                <input type='checkbox'/>
                <span className={styles.customCheckbox}></span>
            </label>
            <span>{props.name}</span>
        </div>

        <div className={styles.editDeleteContainer}>
            <button 
                onClick={() => {setStatusModal(true)}}>
                <Pencil className={styles.editButton}/>
            </button>
                {statusModal && 
                    <Modal 
                        title='Editar tarefa'
                        action='Atualizar'
                        statusModal={setStatusModal}
                        buttonAction={handleConfirm}
                        value={taskText}
                        editValue={setTaskText}
                    />}
            <button>
                <Trash2 onClick={handleDelete} className={styles.deleteButton}/>
            </button>
        </div>
    </div>
  )
}

export default Task
