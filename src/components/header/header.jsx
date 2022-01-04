import './header.css';

import React, { Component } from 'react';

import { BiCoinStack } from "react-icons/bi";
export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <header>
            <div className='ramat-gan-logo'></div>
            <div className="coin-and-img" ><BiCoinStack className="imgcoin" ></BiCoinStack><span className="points">{this.props.score}</span></div>
            <div className="logo"></div>
          </header>
        )
    }
} 
