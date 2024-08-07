import { useContext, useRef, useState } from 'react'
import { taskContext } from '../Context/Context'
import {v4 as uuidv4} from 'uuid'
import './NewTask.css'

export const NewTask = () => {

    const context = useContext(taskContext)

    const [titleTask, setTitleTask] = useState('')
    const [descriptionTask, setDescriptionTask] = useState('')

    const txtTitle = useRef('')
    const txtDescription = useRef('')

    const handleTitleTask = (event) => setTitleTask(event.target.value)
    const handleDescriptionTask = (event) => setDescriptionTask(event.target.value)

    const handleCreateTask = (event) => {
        event.preventDefault()
        const newTask = {
            id: uuidv4(),
            title: titleTask,
            description: descriptionTask,
            status: false
        }

        context.setTask([...context.tasks,newTask])
        context.setFilteredTask([...context.tasks,newTask])

        txtTitle.current.value = ''
        txtDescription.current.value = ''
    }

  return (
    <form action="">
        <fieldset>
            <label>Titulo de la Tarea</label>
            <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='Ej: Aseo Ambiente' type="text" />
        </fieldset>
        <fieldset>
            <label>Descripcion de la Tarea</label>
            <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' placeholder='Ej: Realizar aseo del Ambiente' type="text" />
        </fieldset>
        <button onClick={handleCreateTask} className='btn-new-task'>Crear Nueva Tarea</button>
    </form>
  )
}
