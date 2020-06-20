import './timer.css';
import React, {Component} from 'react';
import Button from "../button/Button";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTimer, beautyTime} from "../../services/helpers/timeModule";
import {timerDictionary} from "../../services/helpers/timerDictionary";
import {resetTimer, startCountdown, toggleStartButton} from "../../services/setTime/action";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    toggleTimer(event) {
        event.preventDefault();

        if (this.props.isStartButton) {
            this.props.toggleStartButton(false);

            let countdown = {...this.props.countdown};
            let restTime = {...this.props.restTime};

            this.props.startCountdown({
                time: setTimer(countdown, false),
                isWorkSession: this.props.isWorkSession
            });

            this.intervalID = setInterval(() => {
                if (countdown.min === 0 && countdown.sec === 0) {
                    if (!this.props.isWorkSession) {
                        return;
                    }

                    this.props.startCountdown({
                        time: setTimer(restTime, false),
                        isWorkSession: false
                    });

                    countdown = {...this.props.countdown};
                } else {
                    this.props.startCountdown({
                        time: setTimer(countdown, false),
                        isWorkSession: this.props.isWorkSession
                    });

                    if (countdown.min === 0 && countdown.sec === 0 && !this.props.isWorkSession) {
                        console.log('The Loop is finished', countdown);
                    }
                }
            }, 1000);
        } else {
            clearInterval(this.intervalID);

            this.props.toggleStartButton(true);
        }
    }

    resetTimer(event) {
        event.preventDefault();

        clearInterval(this.intervalID);

        this.props.startCountdown({
            time: this.props.workTime,
            isWorkSession: true
        });
        this.props.resetTimer();
        this.props.toggleStartButton(true);
    }

    render() {
        return (
            <div className="Timer">
                <div className="Timer-caption">
                    {
                        this.props.isWorkSession
                            ?
                            timerDictionary.caption[0]
                            :
                            timerDictionary.caption[1]
                    }
                </div>
                <div className="Timer-time">{beautyTime(this.props.countdown)}</div>
                <div className="Timer-buttonWrapper">
                    <Button
                        name={(
                            this.props.isStartButton
                                ?
                                timerDictionary.buttons.start[0]
                                :
                                timerDictionary.buttons.start[1]
                        )}
                        type="start"
                        click={this.toggleTimer}
                        isStarted={this.props.isStartButton}
                    />
                    <Button
                        name={timerDictionary.buttons.reset[0]}
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
        workTime: state.setTime.workSessionTime.time,
        restTime: state.setTime.restSessionTime.time,
        isStartButton: state.setTime.isStartButton,
        isWorkSession: state.setTime.isWorkSession
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            startCountdown,
            resetTimer,
            toggleStartButton
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);