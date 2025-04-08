import React from 'react'
import ColorScheme from '@/assets/ColorScheme.svg'
import SearchIcon from '@/assets/SearchIcon.svg'
import styles from './TodoControls.module.css'

function TodoControls() {
  return (
    <div className={styles.containerPanelControl}>
      <h1>Lista de Tarefas</h1>
      <div className={styles.containerContent}>
        <div className={styles.search}>
          <input placeholder='Buscar tarefa...' />
          <button className={styles.searchButton}>
            <img src={SearchIcon} />
          </button>
        </div>
        <div className={styles.filter}>
          <select className={styles.selected}>
            <option value='all' className={styles.option}>Todas</option>
            <option value='completed'  className={styles.option}>Completas</option>
            <option value='incomplete'  className={styles.option}>Incompletas</option>
          </select>
        </div>
        <button className={styles.colorButton}>
          <img src={ColorScheme} />
        </button>
      </div>
    </div>
  )
}

export default TodoControls