import React from 'react'
// import Album from './Albums'

export default function Album({album}) {
    const {id, title} = album
  return (
    <div style={{border:'2px solid purple', padding:'10px', borderRadius:'15px', marginTop:'15px'}}>
      <h3>id : {id} </h3>
      <h3>title : {title} </h3>

 
    </div>
  )
}
