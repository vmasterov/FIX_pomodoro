import {WORK_CHANGE, REST_CHANGE} from "./types";

export function changeTime(type, value) {
    let typeAction = type === 'workSessionTime' ? WORK_CHANGE : REST_CHANGE;

    return {
        type: typeAction,
        payload: value
    };
}