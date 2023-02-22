

export function handledragend(setTasks, draggingId, draggingStage, setClassname, setDraggingId) {
    setTasks((prevTasks) => {
        var tasks = prevTasks.map((task) => {
            if (task.id === draggingId) {
                return {...task, stage: draggingStage }
            } else {
                return task
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        return tasks

    })
    setClassname('task')
    setDraggingId(0)
}

export function savedtasks() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
        return JSON.parse(tasks)
    } return []
}


export function changetaskname(setTasks, id, newname, priority) {
    setTasks((prevTasks) => {
        var tasks = prevTasks.map((task) => {
            if (task.id === id) {
                return { id: task.id, name: newname, stage: task.stage, priority: priority }
            } else {
                return task
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        return tasks

    })
}

export function deletetask(setTasks, newid) {
    setTasks((prevTasks) => {
        var tasks = []
        for (let i = 0; i < prevTasks.length; i++) {
            if (prevTasks[i].id != newid) {
                tasks.push(prevTasks[i])
            }
        }

        localStorage.setItem('tasks', JSON.stringify(tasks))
        return tasks

    })

}