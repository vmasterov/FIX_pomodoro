import {COUNTDOWN} from "./types";

export function countdown(time) {
    return {
        type: COUNTDOWN,
        payload: time
    }
}