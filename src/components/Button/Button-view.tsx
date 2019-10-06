import React from 'react';
import './Button.css';

type P = {
    className?: string,
    hoverColor?: string,
    style: {
        backgroundColor: string,
        padding: string
    },
    hover: () => void,
}

const defaultProps = {
    hoverColor: '#00ffc4'
}

const Button: React.FC<P> = props => {
    return (
        <button 
            className={`button ${props.className}`}
            style={props.style}
            onMouseEnter={props.hover}
            onMouseLeave={props.hover}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = defaultProps;

export {Button as ButtonView};