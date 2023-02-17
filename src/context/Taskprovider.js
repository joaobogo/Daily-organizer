import React, { useState } from 'react'
import { StyledFlex } from '../components/styles/Flex.styled'
import Taskcontext from './Taskcontext'
import { savedtasks } from '../functions/functions'


function Taskprovider({ children }) {

  const [draggingId, setDraggingId] = useState(0)
  const [draggingStage, setDraggingStage] = useState('')
  const [tasks, setTasks] = useState(savedtasks())
  const globalState = {
    tasks, setTasks,
    draggingId, setDraggingId,
    draggingStage, setDraggingStage,
  }

  return (
    <Taskcontext.Provider value={globalState}><StyledFlex>{children}</StyledFlex></Taskcontext.Provider>
  )
}

export default Taskprovider