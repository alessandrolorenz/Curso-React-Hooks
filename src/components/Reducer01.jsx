import React, { useReducer } from 'react'

export default function Reducer01() {
  // use reducer recebe dois argumentos: uma função e o valor inicial (retorno igual useState (valor e função))
  // const [number, setNumber] = useReducer(() => number, 0)
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0,
  )
  return <h1 onClick={() => setNumber(1)}>{number}</h1>
}
