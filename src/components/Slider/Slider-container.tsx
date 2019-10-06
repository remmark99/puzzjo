import React from 'react';
import { SliderView } from './Slider-view';
import Flickity from 'flickity';

export default class Slider extends React.Component {
    componentDidMount() {
        const elem = document.getElementsByClassName('main-carousel')[0];
        console.log(elem);

        const flkty = new Flickity( elem, {
            // options
            cellAlign: 'left',
            autoPlay: 5000,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            cellSelector: '.carousel-cell'
        });
    }

    render() {
        return SliderView(this.props);
    }
}