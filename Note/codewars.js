'use strict';
function getParticipants(handshakes) {
    let res = 0;
    while ((res * (res - 1) / 2) < handshakes) {
        res++;
    }
    return res;
}
console.log(getParticipants(6));
