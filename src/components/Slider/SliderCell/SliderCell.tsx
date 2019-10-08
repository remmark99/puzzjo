import React from 'react';
import './SliderCell.css';
import arrow from '../../../assets/images/arrow.svg';
import Button from '../../Button';

type P = {
    heading: string;
    text?: string;
    buttons: {
        first: {
            text: string,
            hoverColor?: string,
        };
        second: string
    }
    img: string;
    imgRightSide?: Boolean;
    size?: string
}

// TODO: Add typing
const defaultProps = {
    imgRightSide: false,
    size: 'L'
}

const SliderCell:React.FC<P> = props => {
    return (
        <div className="carousel-cell">
            {
                props.imgRightSide ||
                <img src={props.img} alt="Slider svg"/>
            }
            <div>
                <h2 className="heading">{props.heading}</h2>
                {
                    props.text &&
                    <span className="text">{props.text}</span>
                }
                <div className="buttons">
                    <Button
                        size={props.size}
                        active
                        hoverColor={props.buttons.first.hoverColor}
                    >
                        {props.buttons.first.text}
                    </Button>
                    <Button size={props.size}>
                        {props.buttons.second}
                        <img className="arrow" src={arrow} alt="Small arrow"/>
                    </Button>
                </div>
            </div>
            {
                props.imgRightSide &&
                <img src={props.img} alt="Slider svg"/>   
            }
        </div>
    )
}

SliderCell.defaultProps = defaultProps;

export default SliderCell;