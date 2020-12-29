import React from "react";
import classes from './Playlist.css'
import Track from "./Tracks/Track";
const Playlist  = (props) => {
const transformtracks = Object.keys(props.tracks)
     .map(tkKey => {
         return [ ...Array(props.tracks[tkKey])].map(( _,i)=>{
            <Track key={tkKey + i} type = {tkKey}    />
         })
     })
    return (
<div className='Playlist'>
  <Track type='scoffed' />
  <Track type='benson' />
  <Track type='leemorgan' />
  <Track type='andreas' />
  <Track type='breker' />
</div>

    )
}

export default Playlist;