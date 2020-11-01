import React, {Component} from 'react';

import './header.css';


export class Home extends Component{
    render(){
        return(
        <div className='head'>
            <nav className="nav">
<a href="" className="ab">HOME</a> |
<a href="/about" className="ab">ABOUT</a> |
<a href="/contact" className="ab">CONTACT</a> |
<a href="/lol" className="ab">LOL</a>
</nav>
        </div>
        )
    }
}