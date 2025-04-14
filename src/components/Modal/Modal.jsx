import React from 'react'
import styles from './Modal.module.css'

function Modal(props) {

  return (
    <div className={styles.overlay}>
        <div className={styles.modal}>
            <strong className={styles.title}>{props.actionModal} tarefa: </strong>
            <input value={props.taskText} onChange={(e) => props.setTaskText(e.target.value)}/>
            <div>
                <button onClick={() => props.setModalIsOpen(false)}>Cancelar</button>
                <button onClick={() => props.actionConfirm()}>{props.actionModal}</button>
            </div>
        </div>
    </div>
  )
}

export default Modal