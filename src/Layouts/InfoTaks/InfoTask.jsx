
import './InfoTask.css'
import React, { useContext, useEffect } from 'react'
import { taskContext } from '../../Context/Context'

export const InfoTask = () => {

    const context = useContext(taskContext)

    useEffect(() => {
        let pending = context.task.filter ( tasks => tasks.status === false )
        let resolve = context.task.filter ( tasks => tasks.status === true )

        context.setPendingTasks(pending.length)
        context.setDoneTasks(resolve.length)

    }, [context.tasks])

    return(
        <>
        <h2 className='info-tasks'>usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas</h2>
        <hr />
        </>
    )

}
