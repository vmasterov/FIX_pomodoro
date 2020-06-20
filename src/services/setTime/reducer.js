import {WORK_CHANGE, REST_CHANGE/*, WORK_BUTTON_CHANGE, REST_BUTTON_CHANGE*/} from "./types";

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
};

export default (state = initialState, action) => {
    switch (action.type) {
        case WORK_CHANGE:
            let workChangeState = {...state};
            workChangeState.workSessionTime.time = {...action.payload};

            return workChangeState;

        case REST_CHANGE:
            let restChangeState = {...state};
            restChangeState.restSessionTime.time = {...action.payload};

            return restChangeState;

        default:
            return state;
    }
}