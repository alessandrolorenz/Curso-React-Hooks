import React, {useState} from 'react'

import Star from './Star'

const createArray = (length) => [
  ...Array(length)
]

export default function StarRating({ totalStars = 5 }) {
  const [
    selectedstars,
    setSelectedStars
  ] = useState(0)
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedstars > i}
          onSelect={() => setSelectedStars(i + 1)} />
      ))
      }
    <p>{selectedstars} of {totalStars} </p>
    </>
  )
}

