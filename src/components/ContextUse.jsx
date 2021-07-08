import React, { useContext } from 'react'
import { DataContext } from './ContextCreate'

export default function AppContextUse() {

  const {data} = useContext(DataContext)

  return (
    <div>
      <h1>Titulo</h1>
      {data.map(dt => (
        <li key={dt.id}>{dt.text}</li>
      ))}
    </div>
  )
}
