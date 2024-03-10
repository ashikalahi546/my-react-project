import React from 'react'
import './Comment.css'

export default function Comment({comment}) {
    // console.log(comment)
    const {name,email,id} = comment
  return (
    <div className='box'>
      <h3>id : {id}</h3>
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
    </div>
  )
}
