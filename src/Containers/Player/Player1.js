import React ,{ Component } from 'react';
import Aoux from '../../Hoc/Aoux'
import Buildcontrols from "./Buildcontrols/Buildcontrols";
import Iframe from 'react-iframe'
import Playlist from "../../Components/Playlists/Playlist";
import Track from "../../Components/Playlists/Tracks/Track";



class Player1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={...}
    // }
     state = {
         tracks : {
             scoffed : 1,
             benson: 1,
             breker :1 ,
             andreas: 1,
             leemorgan : 1
         }
     }
     addTrackHandler = (type)=> {
   const oldset = this.state.tracks[type];
   const updated = oldset + 1 ;
   const updatetracks = {
       ...this.state.tracks
   };
   updatetracks[type] = updated;

     }

    render ( ) {
        return (
            <Aoux>


                    <Playlist tracks = {this.state.tracks}  />
                    <Buildcontrols/>



            </Aoux>


        )


    }

}


export default Player1;
