import React from 'react';
import Aux from '../../Hoc/Aoux'
import './Layout.css'

const Layout = (props) =>(
    <Aux>
    <div>Toolbar,Sidrawer, Backdroop </div>
    <main className = 'Content '>
        {props.children}
    </main>
    </Aux>
)

export default Layout
