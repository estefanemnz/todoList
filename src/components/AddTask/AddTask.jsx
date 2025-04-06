import React from 'react'

function AddTask() {
  return (
    <div>
        <button> + </button>
        <div>
            <strong>Nova tarefa</strong>
            <input placeholder='Insira sua tarefa'/>
            <div>
                <button>Cancelar</button>
                <button>Adicionar</button>
            </div>
        </div>
    </div>
  )
}

export default AddTask