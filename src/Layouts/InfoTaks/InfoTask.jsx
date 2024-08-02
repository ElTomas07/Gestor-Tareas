
import './InfoTask.css'
import React, { useContext, useEffect } from 'react'
import { taskContext } from '../../Context/Context'

export const InfoTask = () => {

    const context = useContext(taskContext)

    useEffect(() => {
        let pending = context.tasks.filter ( tasks => tasks.status === false )
        let resolve = context.tasks.filter ( tasks => tasks.status === true )

        context.setPendingTask(pending.length)
        context.setDoneTask(resolve.length)

    }, [context.tasks])

    return(
        <>
        <h2 className='info-tasks'>usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas</h2>
        <hr />
        </>
    )

}
