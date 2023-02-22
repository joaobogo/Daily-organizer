import React, { useContext, useState } from 'react'
import Taskcontext from '../context/Taskcontext'
import Task from './Task'

function Stage({ title, color }) {
    const [newtask, setNewtask] = useState('')
    const { tasks, setTasks, setDraggingStage, draggingId } = useContext(Taskcontext)

    function handlefilter(task) {
        return task.stage === title
    }

    function handlechange(event) {
        setNewtask(event.target.value)
    }

    function handleclick(event) {
        event.preventDefault()
        if (newtask) {
            const id = Date.now()
            setTasks((prevTasks) => {
                var tasktosave = [...prevTasks, { name: newtask, stage: title, id: id }]
                localStorage.setItem('tasks', JSON.stringify(tasktosave))
                return tasktosave
        })
        }
    }

    function handledragover() {
        setDraggingStage(title)
    }

    return (
        <div className='stagecontainer' onDragOver={handledragover}>
            <p className={color}>{title}</p>
            {tasks.filter(handlefilter).map((task) => (
                <Task key={task.id} data={task} />
            ))}

            <input type='text' readOnly={draggingId} value={newtask} onChange={handlechange} />
            <button onClick={handleclick}>Create</button>
        </div>
    )
}

export default Stage