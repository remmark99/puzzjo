import React from 'react';
import SliderCell from './SliderCell';
import './Slider.css';
import firstImage from '../../assets/images/slider-one.png';
import secondImage from '../../assets/images/slider-two.png'
import thirdImage from '../../assets/images/slider-three.png';
// import left from '../../assets/images/left.svg';

const Slider: React.FC = () => {
    return (
        <div className="container slider-container">
            <div className="main-carousel">
                <SliderCell
                    imgRightSide
                    heading="Find a perfect candidate"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    buttons={{
                        first: {
                            text: 'Candidate list',
                            hoverColor: '#fd4e26'
                        },
                        second: 'How it works'
                    }}
                    img={firstImage}
                ></SliderCell>
                <SliderCell
                    heading="Your dream job just a click away"
                    buttons={{
                        first: {
                            text: 'Get started now',
                            hoverColor: '#159ce4'
                        },
                        second: 'Details'
                    }}
                    img={secondImage}
                    size='XL'
                ></SliderCell>
                <SliderCell
                    imgRightSide
                    heading="Get your dream job"
                    text="We have 69.368 great job offers you deserve!"
                    buttons={{
                        first: {
                            text: 'How it works',
                            hoverColor: '#f9bc35'
                        },
                        second: 'About us'
                    }}
                    img={thirdImage}
                ></SliderCell>
                {/* <img className="slider-button" src={left} alt="carousel button"/>
                <img className="slider-button right" src={left} alt="carousel button"/> */}
            </div>
        </div>
    )
}

export {Slider as SliderView}
