// import './App.css';
import React, {Component} from "react";
// import { Navbar, NavItem, Icon } from 'react-materialize';

export default class Navigation extends Component{
    render(){
        return (
            <div>
                <nav className="h-nav">
                    <ul className="h-ul">
                        <li className="h-li"><a className="active h-a" href="#home">Home</a></li>
                        <li className="h-li"><a className="h-a" href="#news">News</a></li>
                        <li className="h-li"><a className="h-a" href="#about">About</a></li>
                        <li className="h-li"><a className="h-a" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}