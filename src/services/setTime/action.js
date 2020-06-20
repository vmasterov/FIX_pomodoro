import {WORK_CHANGE, REST_CHANGE, COUNTDOWN, RESET_TIMER, TOGGLE_START_BUTTON} from "./types";

export function changeTime(type, value) {
    let typeAction = type === 'workSessionTime' ? WORK_CHANGE : REST_CHANGE;

    return {
        type: typeAction,
        payload: value
    };
}

export function startCountdown(data) {
    return {
        type: COUNTDOWN,
        payload: data
    }
}

export function toggleStartButton(isStarted) {
    return {
        type: TOGGLE_START_BUTTON,
        payload: isStarted
    }
}

export function resetTimer() {
    return {
        type: RESET_TIMER
    }
}