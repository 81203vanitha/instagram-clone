import React from 'react'
import Sidebar from './sidebar'
import Feed from './feed'
import Suggestion from './Suggestion'
function App() {
  return (
   
    <div className="d-flex vh-100">
      <div className="w-20"><Sidebar/></div>
      <div className="w-50  "><Feed/></div>
      <div className="w-30"><Suggestion/></div>
    </div>
    
  )
}

export default App
