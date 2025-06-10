import React from 'react'
import MyContext from '../ContextProvider/MyContext'


export default function Testing() {

    const {n,r} = React.useContext(MyContext)

  return (
    <>
      <h1>Testing</h1>
        {n}
        {r}
    </>
  )
}
