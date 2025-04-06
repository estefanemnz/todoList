import { useState } from 'react'
import './App.css'

import TodoControls from '@/components/TodoControls/TodoControls'
import TaskList from '@/components/TaskList/TaskList'
import AddTask from '@/components/AddTask/AddTask'
function App() {

  const [Tasks, setTasks] = useState([
    {name: "Tarefa 1"},
    {name: "Tarefa 2"},
    {name: "Tarefa 3"},
    {name: "Tarefa 4"}
  ]);

  return (
    <>
      <div>
        <TodoControls/>
        <TaskList>
          {Tasks.map(Item => (<h1>{Item.name}</h1>))}
        </TaskList>
        <AddTask/>
      </div>
    </>
  )
}

export default App
