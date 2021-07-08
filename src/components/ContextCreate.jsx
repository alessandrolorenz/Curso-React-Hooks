import React, { createContext } from 'react'
import ContextUse from './ContextUse'

export const DataContext = createContext()

const data = [
  { id: 1, text: 'texto 01' },
  { id: 2, text: 'texto 02' },
  { id: 3, text: 'texto 03' },
  { id: 4, text: 'texto 04' },
]

export default function Application() {

  return (
    <DataContext.Provider value={{data}}>
      <ContextUse />  
    </DataContext.Provider>

)}
