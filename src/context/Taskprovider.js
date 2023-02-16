import React, { useState } from 'react'
import { StyledFlex } from '../components/styles/Flex.styled'
import mocktasks from '../mock/mock'
import Taskcontext from './Taskcontext'



function Taskprovider({ children }) {
  const [draggingId, setDraggingId] = useState(0)
  const [draggingStage, setDraggingStage] = useState('')
  const [tasks, setTasks] = useState(mocktasks)
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