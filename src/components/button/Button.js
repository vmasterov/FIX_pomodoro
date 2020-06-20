import './button.css';
import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button className="Timer-button Timer-button-reset">Сброс</button>
        );
    }
}

export default Button;