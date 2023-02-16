import React from 'react'
import Stage from './Stage'
import Styledboard from './styles/Dashboard.styled'

const stages = [{title:"To-do", color:'red'},{title:"In Progress", color:'yellow'},{title:'Done',color:'green'}]

function Dashboard() {
    return (
        <Styledboard>
            <header>
                <h1>My Tasks</h1>
            </header>
            <div className='stages'>
                {stages.map((stage)=>(
                    <Stage key={stage.title} title={stage.title} color={stage.color}/>
                ))}
            </div>
        </Styledboard>
    )
}

export default Dashboard