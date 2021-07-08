import React, { useReducer } from 'react'

export default function Reducer01() {
  // use reducer recebe dois argumentos: uma função e o valor inicial (retorno igual useState (valor e função))
  // const [number, setNumber] = useReducer(() => number, 0)
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => toggle} /* toda vez que chamar toggle, executa a função passada no useReducer */
      />
      {checked ? 'checked' : 'not checked'}
    </>
  )
}
