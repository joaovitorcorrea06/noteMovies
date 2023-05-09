import { Routes as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'


function Routes() {

  return (
        <Router>

          <Route path='/login' element={<Login/> } />
          <Route path='/' element={<Home/>} />
  
        </Router>
  )
}

export default Routes
