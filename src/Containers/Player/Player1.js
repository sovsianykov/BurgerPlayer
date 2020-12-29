import React ,{ Component } from 'react';
import Aux from '../../Hoc/Aoux'
import Iframe from 'react-iframe'
import Button from '@material-ui/core/Button'
import Track from "../../Components/Playlists/Tracks/Track";



class Player1 extends Component {


    render ( ) {
        return (
            <Aux>
                <div>
                    <Iframe url="http://www.youtube.com/embed/flVtAcripow" className= 'iframe' loading='true'  />

                </div>
                 <div>
                     <Button variant='contained' color= 'primary' >Play</Button>

                 </div>
            </Aux>


        )


    }

}


export default Player1;
