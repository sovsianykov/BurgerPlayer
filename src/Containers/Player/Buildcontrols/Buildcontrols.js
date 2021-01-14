import React from "react";
import   './Buidcontrols.css'
import Buildbuttons from "./BuildButtons/Buildbuttons";
const controls = [
    { label: 'Sceleton', type: 'scoffed'},
    { label: 'Groove', type: 'benson'},
    { label: 'Move', type: 'andreas'},
    { label: 'Stage ', type: 'breker'},
    { label: 'Lee ', type: 'leemorgan'},
]
 const Buildcontrols = (props) => (



     <div className='Buildcontrol'>
    { controls.map(ctrl => (
            <Buildbuttons key = {ctrl.label} label ={ctrl.label}
                           added = { ()=>  props.tracksAdded(ctrl.type)}
                           removed ={()=> props.traksRemoved(ctrl.type) }
                          disabled = {props.disabled[ctrl.type]}
            />
        ))}

     </div>


 )
export default Buildcontrols;
