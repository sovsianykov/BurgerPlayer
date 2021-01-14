import React from 'react';
import Button from '@material-ui/core/Button';
import   './Buildbuttons.css'
const Buildbuttons = (props) => (

         <div className='Buildbuttons'>
             <div className='Label'> {props.label}</div>
             <Button  className='Button' variant='outlined' color='secondary'
                      onClick={props.added} >More
             </Button>
             <Button  className='Button' variant='outlined' color='primary'
                      onClick={props.removed}
                      disabled={props.disabled}                >less
             </Button>
         </div>
)
export default Buildbuttons;


