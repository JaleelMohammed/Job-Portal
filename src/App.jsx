
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Hire from './assets/Hire'
import Jobs from './assets/Jobs'
function App() {


  return (

    <Routes>

      <Route path='/' element={<Home />}> </Route>
      <Route path='/jobs' element={<Jobs />}> </Route>
      <Route path='/hire' element={<Hire />}> </Route>
    </Routes>


  )
}

export default App
