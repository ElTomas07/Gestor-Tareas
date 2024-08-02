import React, { useContext } from 'react'
import './Home.css'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { ContainerTask } from '../../Layouts/ContainerTask/ContainerTask'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext } from '../../Context/Context'
import { NewTask } from '../../NewTask/NewTask'
import { InfoTask } from '../../Layouts/InfoTaks/InfoTask'
import { FilterTask } from '../../FilterTasks/FilterTask'

export const Home = () => {
  
  const context = useContext(taskContext)

  return (
    <>
    <Header>
        <h1>Gestor de Tareas</h1> 
        <NewTask/>
        <InfoTask/>
        <FilterTask/>
    </Header>
    <Main>
      <ContainerTask>
        {
        context.filteredTask.map((task,idx) => <ItemTask key={task+idx} idTask={task.id} content={task.description} titleTask={task.title}/>)
        }
      </ContainerTask>
    </Main>
    </>
  )
}
