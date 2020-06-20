import {WORK_CHANGE, REST_CHANGE, COUNTDOWN} from "./types";

const initialState = {
    workSessionTime: {
        time: {
            min: 15,
            sec: 0
        },
        mini: 1,
        maxi: 30
    },
    restSessionTime: {
        time: {
            min: 5,
            sec: 0
        },
        mini: 0,
        maxi: 10
    },
    countdown: {
        min: 0,
        sec: 2
    },
    isWorkSession: true,
    isSetTimeActive: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case WORK_CHANGE:
            let workChangeState = {...state};
            workChangeState.workSessionTime.time = workChangeState.countdown = {...action.payload};

            return workChangeState;

        case REST_CHANGE:
            let restChangeState = {...state};
            restChangeState.restSessionTime.time = {...action.payload};

            return restChangeState;

        case COUNTDOWN:
            let countdownState = {...state};
            countdownState.countdown = {...action.payload};
            countdownState.isSetTimeActive = false;

            return countdownState;

        default:
            return state;
    }
}