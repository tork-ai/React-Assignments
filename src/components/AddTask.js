import {useState} from 'react'
 
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [days, setDays] = useState('')
    const [executor, setExecutor] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({text, days, executor})

        setText('')
        setDays('')
        setExecutor('')
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type = 'text' placeholder = 'Add Task' value = {text} onChange = {(e) => setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>Days</label>
                <input type = 'text' placeholder = 'Number of days to complete' value = {days} onChange = {(e) => setDays(e.target.value)} />
            </div>
            <div className = 'form-control'>
                <label>Executor</label>
                <input type = 'text' placeholder = 'Task performer' value = {executor} onChange = {(e) => setExecutor(e.target.value)} />
            </div>

            <input type = 'submit' value = 'Save Task' className = 'btn' style = {{backgroundColor : 'lightblue'}}/>
        </form>
    )
}

export default AddTask
