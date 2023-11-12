import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
 return (
  <>
   <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/About' Component={About}/>
   </Routes>
  </>
 )
}

export default App
