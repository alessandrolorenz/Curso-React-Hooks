import React, { useReducer } from 'react'

const initialState = {
  message: 'Clique para trocar a frase'
}

function reducer (state, action) {
  switch (action.type) {
    case "mensagem01" :
      state.message = "Olá!"
      return {
        message: `Reducer type 01: ${state.message}`
      };
      case "mensagem02":
        state.message = "Oi!"
        return {
          message: `Reducer type 02: ${state.message}`
        };
        default:
          return
  }
}

export default function Reducer01() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <>
      <p>Mensagem: {state.message}</p>
      <button onClick={() => dispatch({type: "mensagem01"})}>Mensagem 01</button>
      <button onClick={() => dispatch({type: "mensagem02"})}>Mensagem 02</button>
    </>
  )
}
