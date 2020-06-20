import './timer.css';
import React, {Component} from 'react';
import Button from "../button/Button";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTimer, beautyTime} from "../../services/helpers/timeModule";
import {timerButtonsNames} from "../../services/helpers/timerButtonsNames";
import {startCountdown} from "../../services/setTime/action";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    toggleTimer(event) {
        event.preventDefault();

        if (!event.target.classList.contains('is-started')) {
            event.target.innerText = timerButtonsNames.start[1];
            event.target.classList.add('is-started');

            let countdown = {...this.props.countdown};
            let restTime = {...this.props.restTime};

            this.props.startCountdown(setTimer(countdown, false));

            this.intervalID = setInterval(() => {
                if (countdown.min === 0 && countdown.sec === 0) {
                    this.props.startCountdown(setTimer(restTime, false));
                }
                else {
                    this.props.startCountdown(setTimer(countdown, false));
                }
            }, 1000);
        }
        else {
            clearInterval(this.intervalID);

            event.target.innerText = timerButtonsNames.start[0];
            event.target.classList.remove('is-started');
        }
    }

    resetTimer(event) {
        event.preventDefault();

        console.log('reset');
    }

    render() {
        return (
            <div className="Timer">
                <div className="Timer-caption">Работаем</div>
                <div className="Timer-time">{beautyTime(this.props.countdown)}</div>
                <div className="Timer-buttonWrapper">
                    <Button
                        name={timerButtonsNames.start[0]}
                        type="start"
                        click={this.toggleTimer}
                    />
                    <Button
                        name={timerButtonsNames.reset[0]}
                        type="reset"
                        click={this.resetTimer}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countdown: state.setTime.countdown,
        // workTime: state.setTime.workSessionTime.time,
        restTime: state.setTime.restSessionTime.time,
        // isWorkSession: state.setTime.isWorkSession
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            startCountdown
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);