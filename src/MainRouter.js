import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/SignIn'
import HomePage from './user/HomePage'

const MainRouter = () => {
    return (<div>
      {/* <Menu/> */}
      
    <Routes>
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path ="/" element={<HomePage/>}/>
    </Routes>
        
      
    </div>)
}

export default MainRouter
