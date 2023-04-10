'use strict';
function handAngle(date) {
    console.log(date, date.toString().match(/\d\d:\d\d/)[0]);
    let [hours, minutes] = date.toString().match(/\d\d:\d\d/)[0].split(':').map(e => +e);
    minutes = minutes === 0 ? 12 : minutes / 5;
    console.log(hours, minutes);
    return 0.0;
}
console.log(handAngle(new Date('2023-04-10T06:00:49.556Z')));
