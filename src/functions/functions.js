

export function handledragend(setTasks, draggingId, draggingStage, setClassname) {
    setTasks((prevTasks) => {
        var tasks = prevTasks.map((task) => {
            if (task.id === draggingId) {
                return { id: task.id, name: task.name, stage: draggingStage }
            } else {
                return task
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        return tasks

    })
    setClassname('task')
}


export function changetaskname(setTasks, id, newname) {
    setTasks((prevTasks) => {
        var tasks = prevTasks.map((task) => {
            if (task.id === id) {
                return { id: task.id, name: newname, stage: task.stage }
            } else {
                return task
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        return tasks

    })
}

