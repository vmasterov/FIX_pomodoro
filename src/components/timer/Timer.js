import './timer.css';
import React, {Component} from 'react';
import Button from "../button/Button";

class Timer extends Component {
    render() {
        return (
            <div className="Timer">
                <div className="Timer-caption">Работаем</div>
                <div className="Timer-time">15:00</div>
                <div className="Timer-buttonWrapper">
                    <Button />
                    <Button />
                </div>
            </div>
        );
    }
}

export default Timer;