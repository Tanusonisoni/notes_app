import React, { useState } from 'react'
import Context from './context'
import { Children } from 'react';

function DataContext({children}) {

    const [id,setId]=useState("");
    const [level,setLevel]=useState("")
    const [topic ,setTopic]=useState("");
    
  return (
    <div>
      <Context.Provider value={{id,setId,level,setLevel,topic ,setTopic}}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default DataContext
