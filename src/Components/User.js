import React, { useRef } from 'react'
import { useEffect } from 'react'

export default function User(val) {

  const userefvar = useRef("user comp")
  console.log(userefvar)

  useEffect(()=> {
    console.log("i am useEffect in user.")
  })

  return (
    <div>
      <h1>User Component</h1>
    </div>
  )
}
