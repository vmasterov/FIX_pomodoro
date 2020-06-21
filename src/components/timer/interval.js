import {setTimer} from "../../services/helpers/timeModule";

export function interval () {
    if (this.props.countdown.min === 0 && this.props.countdown.sec === 0) {
        if (!this.props.isWorkSession) {
            return;
        }

        this.props.startCountdown({
            time: this.props.restTime,
            isWorkSession: false
        });

    } else {
        this.props.startCountdown({
            time: setTimer(this.props.countdown, false),
            isWorkSession: this.props.isWorkSession
        });
    }
};