import React from 'react'
import ColorScheme from '@/assets/ColorScheme.svg'
import SearchIcon from '@/assets/SearchIcon.svg'

function TodoControls() {
  return (
    <div>
        <strong>Lista de Tarefas</strong>
        <div>
          <input placeholder='Buscar tarefa'/>
          <img src={SearchIcon}/>
        </div>
        <div>
          <select>
            <option value='all'>Todas</option>
            <option value='completed'>Completas</option>
            <option value='incomplete'>Incompletas</option>
          </select>
        </div>
        <button>
          <img src={ColorScheme}/>
        </button>
    </div>
  )
}

export default TodoControls