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



const text = "wassup";
console.log(text.toUpperCase()); //012345
console.log(text.indexOf("s")); // wassup (s = 2)

const slice = "yo nigga wassup";
console.log(slice.slice(9, 16)); // slice - вырезать слово или букву и показать её
console.log(slice.slice(9)); // можно указать только где начинается слово, он вырежит его до конца предл.
console.log(slice.substring(9, 16)); // Вроде одно и тоже.  
console.log(slice.substr(9, 6)); // вторая цифра означает кол-во символов а не номер строки. Функционал тот же.

const num = 34.34;
console.log(Math.round(num)); // Math.round - округляет число.

const test = "12.2px";
console.log(parseInt(test)); // переводит число в другую систему исчеслений.
console.log(parseFloat(test)); // Выводит значение с плавающей точкой.