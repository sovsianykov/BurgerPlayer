import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import   './Buildbuttons.css'
const Buildbuttons = (props) => (

         <div className='Buildbuttons'>
             <div className='Label'> {props.label}</div>
             <Button  className='Button' variant='outlined' color='secondary' >More </Button>
             <Button  className='Button' variant='outlined' color='primary' >less </Button>
         </div>
)
export default Buildbuttons;
