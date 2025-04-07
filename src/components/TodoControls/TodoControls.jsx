import React from 'react'
import ColorScheme from '@/assets/ColorScheme.svg'
import SearchIcon from '@/assets/SearchIcon.svg'
import styles from './TodoControls.module.css'

function TodoControls() {
  return (
    <div className={styles.panelControl}>
      <h1>Lista de Tarefas</h1>
      <div className={styles.container}>
        <div className={styles.search}>
          <input placeholder='Buscar tarefa...' />
          <button className={styles.searchButton}>
            <img src={SearchIcon} />
          </button>
        </div>
        <div className={styles.filter}>
          <select className={styles.selected}>
            <option value='all'>Todas</option>
            <option value='completed'>Completas</option>
            <option value='incomplete'>Incompletas</option>
          </select>
        </div>
        <button>
          <img src={ColorScheme} />
        </button>
      </div>
    </div>
  )
}

export default TodoControls