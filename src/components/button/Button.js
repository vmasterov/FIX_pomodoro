import './button.css';
import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button
                className={'Timer-button Timer-button-' + this.props.type + (this.props.isStarted ? ' is-started' : '')}
                onClick={this.props.click}
            >
                {this.props.name}
            </button>
        );
    }
}

export default Button;