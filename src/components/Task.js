import React, { useContext, useState } from 'react'
import Taskcontext from '../context/Taskcontext'
import { handledragend, changetaskname } from '../functions/functions'



function Task({ data }) {
    const [isediting, setIsEditing] = useState(false)
    const [input, setInput] = useState(data.name)
    const [className, setClassname] = useState("task")
    const { setDraggingId, setTasks, draggingId, draggingStage } = useContext(Taskcontext)

    function handledrag() {
        setDraggingId(data.id)
        setClassname("highlight")
    }

    function handleclick() {
        if(isediting){
            setIsEditing(false)
            changetaskname(setTasks, data.id, input)
        }else{
            setIsEditing(true)
            
        }
        
    }

    function handlechange(event) {
        setInput(event.target.value)
    }

    return (
        <div className={className} draggable='true' onDragStart={handledrag} onDragEnd={() => handledragend(setTasks, draggingId, draggingStage, setClassname)}>
            {isediting ? <input value={input} onChange={handlechange} type="text" /> : <span>{data.name}</span>}
            <button onClick={handleclick}>Edit</button>
        </div>
    )
}

export default Task