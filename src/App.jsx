import React from 'react'
import { Link  ,Route, Routes} from 'react-router-dom' 
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import UserDetailed from './components/UserDetailed'


const App = () => {
  return (
    <div className='p-4 '>
      <nav className='mt-5 mb-5 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<UserDetailed/>}/>

      </Routes>
    </div>
  )
}

export default App