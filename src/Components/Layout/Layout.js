import React from 'react';
import Aoux from '../../Hoc/Aoux'
import './Layout.css'

const Layout = (props) =>(
    <Aoux>
    <div>Toolbar,Sidrawer, Backdroop </div>
    <main className = 'Content '>
        {props.children}
    </main>
    </Aoux>
)

export default Layout
