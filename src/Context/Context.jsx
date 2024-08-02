import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const taskContext = createContext()

const tsk = [
    { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripcion Pendiente1', status: false},
    { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripcion Pendiente2', status: true},
    { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripcion Pendiente3', status: true},
]

export const TaskProvider = ({children}) =>{

    const [tasks, setTask] = useState(tsk)
    const [filteredTask, setFilteredTask] = useState(tsk)
    const [pendingTasks, setPendingTask] = useState(0)
    const [doneTask, setDoneTask] = useState(0)


    const UpdateTaskStatus = (taskId, newStatus) => {
        setTask(prevTasks =>
            prevTasks.map(task => 
                task.id === taskId ? {...task, status: newStatus} : task
            )
        );
    }

    return(
        <taskContext.Provider value={{
            tasks,
            setTask,
            pendingTasks,
            setPendingTask,
            doneTask,
            setDoneTask,
            isChecked,
            setIsChecked,
            filteredTask,
            setFilteredTask,
            UpdateTaskStatus
        }}>
            {children}
        </taskContext.Provider>
        
    )
}