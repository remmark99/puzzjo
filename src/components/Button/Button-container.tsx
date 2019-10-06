import React from 'react';
import { ButtonView } from './Button-view';

type P = {
    className?: string,
    hoverColor: string,
    active: Boolean,
    size?: string
}

type S = {
    hovered: Boolean
}

export default class Button extends React.Component<P, S> {
    constructor(props: any) {
        super(props);

        this.state = {
            hovered: false
        }
    }

    public static defaultProps = {
        hoverColor: '#00ffc4',
        active: false
    }

    toggleHover() {
        this.setState({
            hovered: !this.state.hovered
        })
    }

    render() {
        let style = this.props.active || this.state.hovered
            ? {
                backgroundColor: this.props.hoverColor,
                padding: this.props.size === 'XL' ? '20px 65px'
                : this.props.size === 'L' ? '20px 30px' : '8px 20px'
            }
            : {
                backgroundColor: 'transparent',
                padding: this.props.size === 'XL' ? '20px 65px'
                : this.props.size === 'L' ? '20px 30px' : '8px 20px'
            };
        const props = {
            ...this.props,
            style,
            hover: this.toggleHover.bind(this)
        }
        return ButtonView(props);
    }
}