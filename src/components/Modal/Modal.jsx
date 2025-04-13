import React from 'react'

function Modal(props) {

  return (
    <div className={styles.overlay}>
        <div>
            <strong>{props.title}</strong>
            <input value={props.value} onChange={(e) => props.editValue(e.target.value)}/>
            <div>
                <button onClick={() => props.statusModal(false)}>Cancelar</button>
                <button onClick={props.buttonAction} >{props.action}</button>
            </div>
        </div>
    </div>
  )
}

export default Modal