import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const Context = (props) => {
  const [users, setusers] = useState([
    {id: 0 , username:"rishabh" , city: "BHOPAL"},
    {id: 1 , username:"abhay" , city: "sehore"},
    {id: 2 , username:"ayush" , city: "sujalpur"},

  ])
  return <UserContext.Provider value={{users , setusers}}>{props.children}</UserContext.Provider>
}

export default Context