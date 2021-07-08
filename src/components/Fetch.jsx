import React, { useEffect, useState } from 'react'

export default function Fetch() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((resp) => setData(resp))
  }, [])

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}> {user.login} </li>
      ))}
    </ul>
  )
}
