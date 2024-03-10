import React, { useEffect, useState } from 'react'
import Album from './Album';

export default function Albums() {
    const [albums,setAlbum] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setAlbum(data))


},[])
  return (
    <div>
      <h3 style={{border:'2px solid orange' , padding:'10px'}}>Album : {albums.length} </h3>

      {

        albums.map((album,i)=> <Album album ={album}key={i}></Album>)
      }
    </div>
  )
}
