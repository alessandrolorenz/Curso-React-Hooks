import React from 'react'

// custom hook
import { useInput } from './useCustomInput'

export default function InputsCustom() {
  const [titlePorps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('')

  const submit = (e) => {
    e.preventDefault()
    alert(`Titulo: ${titlePorps.value}  -  Color: ${colorProps.value}`)
    resetTitle()
    resetColor()
  }

  return (
    <form onSubmit={submit}>
      <input {...titlePorps} type="text" />
      <input {...colorProps} type="color" />
      <button type="submit">Send</button>
    </form>
  )
}
