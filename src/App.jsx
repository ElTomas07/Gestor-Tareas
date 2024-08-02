import './App.css'
import { Home } from './Pages/Home/Home'
import { TaskProvider } from './Context/Context'


export const App = () => <TaskProvider> <Home/> </TaskProvider>


