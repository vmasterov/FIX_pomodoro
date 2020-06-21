export const setTimer = (stateTime, isPlus = true) => {
    let time = {...stateTime};

    if (time.min === 0 && time.sec === 0) {
        return time;
    }

    if (isPlus) {
        if (time.sec++ === 59) {
            time.sec = 0;
            time.min++;
        }
    } else {
        if (time.sec-- === 0) {
            time.sec = 59;
            time.min--;
        }
    }

    return time;
};

export const beautyTime = (time) => {
    let min = time.min;
    let sec = time.sec;

    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    return `${min}:${sec}`;
};