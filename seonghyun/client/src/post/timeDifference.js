export const timeDifference = (current, previous) => {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' 초 전';
    }
    else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' 분 전';
    }
    else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' 시간 전';
    }
    else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' 일 전';
    }
    else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' 달 전';
    }
    else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' 년 전';
    }
};

export const DisplayTime12Hour = (date) => {
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    // var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var time = hours + ":" + minutes + " " + am_pm;
    return time
}