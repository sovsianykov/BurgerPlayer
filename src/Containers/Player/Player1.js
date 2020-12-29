import React ,{ Component } from 'react';
import Aux from '../../Hoc/Aoux'
import Iframe from 'react-iframe'
import Button from '@material-ui/core/Button'




class Player1 extends Component {
    state = {
        tracks : [
            { src: './Breezin.mp3'

            }
        ]
    }

    render ( ) {
        return (
            <Aux>
                <div> <Button variant='contained' color= 'primary' >Play</Button>
                    <Iframe url="http://www.youtube.com/embed/flVtAcripow" className= 'iframe' loading='true'  />

                </div>
                 <div>PlaylistBuilder</div>
            </Aux>


        )


    }

}


export default Player1;
