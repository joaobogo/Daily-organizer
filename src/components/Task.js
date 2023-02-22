import React, { useContext, useState } from 'react'
import Taskcontext from '../context/Taskcontext'
import { handledragend, changetaskname, deletetask } from '../functions/functions'
import Flag from './Flag'



function Task({ data }) {
    const [isediting, setIsEditing] = useState(false)
    const [input, setInput] = useState(data.name)
    const [select, setSelect] = useState('')
    const [className, setClassname] = useState("task")
    const { setDraggingId, setTasks, draggingId, draggingStage } = useContext(Taskcontext)

    function handledrag() {
        setDraggingId(data.id)
        setClassname("highlight")
    }

    function handleclick() {
        if (isediting) {
            setIsEditing(false)
            changetaskname(setTasks, data.id, input, select)
        } else {
            setIsEditing(true)

        }

    }

    function handlechange(event) {
        setInput(event.target.value)
    }


    function handleselect(event) {
        setSelect(event.target.value)
    }

    function handledelete() {
        deletetask(setTasks, data.id)
    }

    return (
        <div className={className} draggable='true' onDragStart={handledrag} onDragEnd={() => handledragend(setTasks, draggingId, draggingStage, setClassname, setDraggingId)}>
            {isediting ? (<div>
                <input value={input} onChange={handlechange} type="text" />
                <select value={select} onChange={handleselect}>
                    <option>Low Priority</option>
                    <option>Medium Priority</option>
                    <option>High Priority</option>
                </select> </div>) : <div><Flag priority={data.priority} /> <span>{data.name}</span><button onClick={handledelete}>X</button></div>}
            <button onClick={handleclick}>Edit</button>
        </div>
    )
}

export default Task