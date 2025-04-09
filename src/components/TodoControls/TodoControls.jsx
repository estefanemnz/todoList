import React from 'react'
import Select from 'react-select'

import ColorScheme from '@/assets/ColorScheme.svg'
import SearchIcon from '@/assets/SearchIcon.svg'

import styles from './TodoControls.module.css'

function TodoControls() {

  const options = [
    { value: 'todas', label: 'Todas'},
    { value: 'incompletas', label: 'Incompletas'},
    { value: 'completas', label: 'Completas'}
  ]

  const stylesSelect = {
    control: (base, state) => ({
      ...base,
      height: '100%',
      fontWeight: 'bold',
      fontSize: '1rem',
      borderRadius: '8px',
      color: 'white',
      backgroundColor:' #534CC2',
      cursor: 'pointer',
      padding: '10px',
      boxShadow: state.isFocused ? ' 0 0 0 2px #6C63FF' : 'none',
      outline: 'none',
    }),

    option: (base, state) => ({
      ...base,
      cursor: 'pointer',
      backgroundColor:' #f7f7f7',
      color:' #6c63ff',
      fontWeight: 'bold',
      borderRadius: '8px',
    }),

    singleValue: (base) => ({
      ...base,
      color: 'white'
    }),

    menu: (base) => ({
      ...base,
      borderRadius: '8px',
      border: '1px solid #6C63FF',

    })
  };

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
          <Select 
            classNamePrefix="select"
            className={styles.selectContainer}
            options={options}
            defaultValue={options[0]}
            styles={stylesSelect}
          />
        </div>
        <button className={styles.colorButton}>
          <img src={ColorScheme} />
        </button>
      </div>
    </div>
  )
}

export default TodoControls