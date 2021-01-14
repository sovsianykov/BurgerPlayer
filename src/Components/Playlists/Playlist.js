import React from "react";
import Track from "./Tracks/Track";
const Playlist  = (props) => {
let transformtracks = Object.keys(props.tracks)
     .map(tkKey => {
         return [ ...Array(props.tracks[tkKey])].map(( _,i)=>{
       return     <Track key={tkKey + i} type = {tkKey}     />
         })
     })
    .reduce(( arr,el ) => {
    return arr.concat(el)
    } ,[])
    if (transformtracks.length === 0) {
        transformtracks = <h2>Please , set the tracks!</h2>
    }
    return (
<div className='Playlist'>

    {transformtracks}
</div>

    )
}

export default Playlist;
