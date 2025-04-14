import React from 'react'
import { useState } from 'react'
import styles from './Task.module.css'

import { Trash2, Pencil } from 'lucide-react'

function Task(props) {
    const [checked, setChecked] = useState(false)

    function handleDelete(){
        const updatedTasks = props.tasks.filter(task => task.id !== props.id)
        props.setTasks(updatedTasks)

    }
    
  return (
    <div className={styles.Task}>
        <div className={styles.titleTask}>
            <label className={styles.checkboxContainer}>
                <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
                <span className={styles.customCheckbox}></span>
            </label>
            <span className={checked ? styles.done : ''}>{props.name}</span>
        </div>

        <div className={styles.editDeleteContainer}>
            <button 
                onClick={() => {
                    props.setModalIsOpen(true)
                    props.setActionModal('Editar')
                    props.setTaskText(props.name)
                    props.setEditingTask(props.id)                    
                }}>
                <Pencil className={styles.editButton}/>
            </button>
            <button>
                <Trash2 onClick={handleDelete} className={styles.deleteButton}/>
            </button>
        </div>
    </div>
  )
}

export default Task
