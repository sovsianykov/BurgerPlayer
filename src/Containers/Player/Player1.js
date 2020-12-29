import React ,{ Component } from 'react';
import Aoux from '../../Hoc/Aoux'
import Iframe from 'react-iframe'
import Playlist from "../../Components/Playlists/Playlist";
import Button from '@material-ui/core/Button'
import Track from "../../Components/Playlists/Tracks/Track";



class Player1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={...}
    // }
     state = {
         tracks : {
             benson: 1,
             breker :1,
             andreas:1

         }


     }

    render ( ) {
        return (
            <Aoux>
                <div>
                    {/*<Iframe url="http://www.youtube.com/embed/flVtAcripow" className= 'iframe' loading='true'  />*/}
                    <Playlist tracks = {this.state.tracks}  />
                </div>


            </Aoux>


        )


    }

}


export default Player1;
