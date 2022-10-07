let s = "";

function getMathResult(a, b) {
    if (typeof (b) === "string" || b <= 0) {
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


let result;
function calculateVolumeAndArea(userNum) {
    if (userNum === "" || userNum <= 0 || !Number.isInteger(userNum)) {
        return("При вычислении произошла ошибка");
    } else {
        let a = Math.pow(userNum, 3);
        let b = 6 * Math.pow(userNum, 2);
        result = `Объем куба: ${a}, площадь всей поверхности: ${b}`;
        return result;
    }
}

console.log(calculateVolumeAndArea(5.3));

const coup = [];
coup[0] = 1, 2, 3, 4;
console.log(coup);






function getCoupNumber(userNum) {
    if (userNum === "" || userNum < 0 || !Number.isInteger(userNum)) {
        return("Ошибка. Проверьте правильность введенного номера места");
    } else if(userNum > 36 || userNum == 0) {
        return("Таких мест в вагоне не существует");
    } else {
        for (let l = 1; l <= 9; l += 0.24) {
            console.log(l);
            for (let i = 1; i <= 36; i++) {
                console.log(i);
                if(userNum === i) {
                    return Math.round(l);
                }
            }
        }
    }   
}
console.log(getCoupNumber(34));