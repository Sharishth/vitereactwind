import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'

import Navhead from './components/Navhead.tsx'

function App() {
 return (
  <>
  <Navhead/>
   <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/About' Component={About}/>
   </Routes>
  </>
 )
}

export default App
