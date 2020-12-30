import React from "react";
import classes from './Buidcontrols.css'
import Buildbuttons from "./BuildButtons/Buildbuttons";
const controls = [
    { label: 'Scofield', type: 'scoffed'},
    { label: 'Benson', type: 'benson'},
    { label: 'Andreas', type: 'andreas'},
    { label: 'Breker', type: 'breker'},
    { label: 'LeeMorgan', type: 'leemorgan'},
]
 const Buildcontrols = (props) => (



     <div className='Buildcontrol'>
    { controls.map(ctrl => (
            <Buildbuttons key = {ctrl.label} label ={ctrl.label} />
        ))}

     </div>


 )
export default Buildcontrols;
