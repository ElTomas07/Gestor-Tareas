import React from 'react'
import './ContainerTask.css'

export const ContainerTask = ({children}) => {
  return (
    <ul className='container-task'>
        {children}
    </ul>
  )
}
