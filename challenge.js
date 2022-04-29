// 1)
// const myFunction = function (num1, num2) {
//     return num1 + num2;
// };

arrowMyFunction = (num1, num2) => {
    return num1 + num2
};

console.log(arrowMyFunction(23, 45));

// 2)
// const add100 = function (money) {
//     return money + 100;
// };

add100 = money => money + 100;

console.log(add100(23));

// 3)

countLetters = (string, letter) => `${string} ${letter.repeat(1)}`
countLetters1 = (string, letter) => `${string} ${letter.repeat(2)}`
countLetters2 = (string, letter) => `${string} ${letter.repeat(4)}`

console.log(countLetters('Hello my name is John', 'i'))
console.log(countLetters1('Hello my name is John', 'h'))
console.log(countLetters2('We love this city a lot, sometimes', 'e'))





