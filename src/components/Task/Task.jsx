import React from 'react'
import { useState } from 'react'
import styles from './Task.module.css'
import TrashIcon from '@/assets/TrashIcon.svg'
import EditIcon from '@/assets/EditIcon.svg'
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
                onClick={() => 
                    {setStatusModal(true)}}>
                    <img src={EditIcon}
                    className={styles.editButton}
            />
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
                <img src={TrashIcon} onClick={handleDelete}/>
            </button>
        </div>
    </div>
  )
}

export default Task
