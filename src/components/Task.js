import Button from './Button'

const Task = ({task, onDelete}) => {
    return (
        <div className = 'task'>
            <h3>Task - {task.text}</h3> 
            <p>Amount of days - {task.days}</p>
            <p>Task's executor - {task.executor}</p>
            <Button color = 'red' text = 'Delete' onClick = {() => onDelete(task.id)} />
        </div>
    )
}

export default Task
