import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/SignIn'

const MainRouter = () => {
    return (<div>
      {/* <Menu/> */}
      
    <Routes>
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
    </Routes>
        
      
    </div>)
}

export default MainRouter
