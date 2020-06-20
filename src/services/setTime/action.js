import {WORK_CHANGE, REST_CHANGE, COUNTDOWN} from "./types";

export function changeTime(type, value) {
    let typeAction = type === 'workSessionTime' ? WORK_CHANGE : REST_CHANGE;

    return {
        type: typeAction,
        payload: value
    };
}

export function startCountdown(time) {
    return {
        type: COUNTDOWN,
        payload: time
    }
}