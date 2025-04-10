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
      minWidth: '150px',
      height: '100%',
      fontWeight: 'bold',
      fontSize: '1rem',
      borderRadius: '8px',
      color: 'white',
      backgroundColor:' #6C63FF',
      cursor: 'pointer',
      boxShadow: '0 0 1.5px 2px rgba(108, 99, 255, 0.3);',
      outline: 'none',
      border: '2px solid #6C63FF',
      '&:hover': {
        boxShadow: '0 0 12px 2px rgba(108, 99, 255, 0.4);'
      },
      ...(state.isFocused && {
        backgroundColor: '#534CC2',
        border: '2px solid #6c63ff',
        boxShadow: 'box-shadow: 0 0 0 2px #6C63FF;',
        outline: 'none',
      })
    }),

    option: (base) => ({
      ...base,
      cursor: 'pointer',
      backgroundColor:' #f7f7f7',
      color:' #6C63FF',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#DBD9F9',
      }
    }),

    singleValue: (base) => ({
      ...base,
      color: 'white'
    }),

    menu: (base) => ({
      ...base,
      borderRadius: '8px',
      border: '1px solid #6C63FF',

    }),


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
            blurInputOnSelect
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