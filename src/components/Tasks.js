import Task from './Task'

const Tasks = ({tasks, onDelete}) => {

    return (
        <div>
            <h3>My Tasks</h3>
            {tasks.map((task) => (
            <div>
                <Task task = {task} onDelete = {onDelete} />
            </div>
            ))}
        </div>
    )
            }

export default Tasks
