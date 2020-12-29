import React from "react";
import classes from './Playlist.css'
import Track from "./Tracks/Track";
const Playlist  = (props) => {
const transformtracks = Object.keys(props.tracks)
     .map(tkKey => {
         return [ ...Array(props.tracks[tkKey])].map(( _,i)=>{
       return     <Track key={tkKey + i} type = {tkKey}     />
         })
     })
    return (
<div className='Playlist'>
  <Track type='scoffed' />
    {transformtracks}
</div>

    )
}

export default Playlist;