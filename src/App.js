import {useState} from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () =>  {
  const [idCount, setIdCount] = useState(4)

  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Api realization',
        days : '6',
        executor : 'Nurken',
    },
    {
      id : 2,
      text : 'UI model creation',
      days : '3',
      executor : 'Elaman',
    },
    {
      id : 3,
      text : 'Database str designing',
      days : '10',
      executor : 'Abai',
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const addTask = (task) => {
  const id = idCount;

  setIdCount(idCount + 1)

  console.log(id)

  const newTask = {id, ...task}
  setTasks([... tasks, newTask])
}

  return (
    <>
    <div className="left">
    <header className = 'header'>
            <h1>Tasks</h1>
        </header>
      <AddTask onAdd = {addTask}/>
    </div>
    <div className="right">
      {tasks.length != 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} /> : <h3>There are no tasks</h3>}
    </div>
    </>
  );
}

export default App;
