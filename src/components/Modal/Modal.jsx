import React, { useEffect, useRef } from 'react'
import styles from './Modal.module.css'


function Modal(props) {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className={styles.overlay}>
        <div className={styles.modal}>
            <h1 className={styles.title}>{props.actionModal} TAREFA </h1>
            <input ref={inputRef} className={styles.editInput} value={props.taskText} onChange={(e) => props.setTaskText(e.target.value)} onKeyDown={(e) => props.onKeyDown(e)}/>
            <div className={styles.modalButtonsContainer}>
                <button 
                  className={styles.cancelModal} 
                  onClick={() => {
                    props.setModalIsOpen(false)
                    props.setTaskText('')
                    }}>
                  CANCELAR
                </button>
                <button className={styles.confirmModal}onClick={() => props.actionConfirm()}>{props.actionModal}</button>
            </div>
        </div>
    </div>
  )
}

export default Modal