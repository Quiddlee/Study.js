let s = "";
function getMathResult (a, b) {
    if (typeof(b) === "string" || b <= 0) {
        return a;
    } else {
    let imput = a;
        for (let i = 1; i <= b; i++) {
        a += imput;
        if (i < b) {
        s += a - imput + "---";
        } else {
            s += a - imput;
        }
    } 
    return s;
}
}
console.log(getMathResult(10, 3));
