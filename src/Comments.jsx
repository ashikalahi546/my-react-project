import React, { useEffect, useState } from 'react'
import Comment from './Comment';

export default function Comments() {
    const [users,setUser] =useState([]);
    useEffect (()=>{
 
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setUser(data))

    },[])


  return (
    <div>
      <h2>User : {users.length}</h2>
         {
            users.map((comment ,i)=> <Comment comment={comment}key={i}></Comment>)
         }
    </div>
  )
}
