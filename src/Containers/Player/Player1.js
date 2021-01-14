import React ,{ Component } from 'react';
import Aoux from '../../Hoc/Aoux'
import Buildcontrols from "./Buildcontrols/Buildcontrols";
import Playlist from "../../Components/Playlists/Playlist";



class Player1 extends Component {

     state = {
         tracks : {
             scoffed : 0,
             benson: 0,
             breker : 0 ,
             andreas: 0,
             leemorgan : 0
         }
     }
     addTrackHandler = (type)=> {
   const oldset = this.state.tracks[type];
   const updatedCount = oldset + 1 ;
   const updatetracks = {
       ...this.state.tracks
   };

   updatetracks[type] = updatedCount;
   this.setState({tracks: updatetracks})
     }
    removeTrackHandler = (type) => {
        const oldset = this.state.tracks[type];
        if (oldset <= 0) { return}
        const updatedCount = oldset - 1 ;
        const updatetracks = {
            ...this.state.tracks
        };
        updatetracks[type] = updatedCount;
        this.setState({tracks: updatetracks})

    }

    render ( ) {
         const disabledInfo = {

             ...this.state.tracks
         }
         for (let key in disabledInfo) {
             disabledInfo[key] = disabledInfo[key] <=0
         }
        return (

            <Aoux>
                    <Playlist tracks = {this.state.tracks}  />
                    <Buildcontrols tracksAdded = {this.addTrackHandler}
                                   traksRemoved = {this.removeTrackHandler}
                                   disabled = {disabledInfo}
                       />



            </Aoux>


        )


    }

}


export default Player1;
