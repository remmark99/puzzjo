import React from 'react';
import logo from '../assets/logo.png';

export default class Logo extends React.Component {
    render() {
        return <img src={logo} alt="puzzjo logotype" height="30px"></img>
    }
}