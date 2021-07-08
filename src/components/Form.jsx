import React, { useState, useEffect, useRef } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  let variable = ''
  const handleChange = (e) => {
    variable = e.target.value
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setName(variable)
    e.target.reset()
  }

  useEffect(() => {
    document.title = `Celebrate ${name}`
  }, [name])

  // segundo formulário usando o useRef
  const text = useRef()
  const color = useRef()

  const submit = (e) => {
    e.preventDefault()
    const textValue = text.current.value
    const colorValue = color.current.value
    alert(`${textValue} é o texto e ${colorValue} é a cor`)
    text.current.value = ''
    color.current.value = ''
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Congratulations {name} !</label>
        <input
          id="teste"
          type="text"
          placeholder="insert a name to change"
          onChange={handleChange}
        />
        <button type="submit">Change name</button>
      </form>

      <form onSubmit={submit}>
        <label>Colors</label>
        <input ref={text} type="text" placeholder="insert a word" />
        <input ref={color} type="color" />
        <button type="submit">Choose</button>
      </form>
    </section>
  )
}
