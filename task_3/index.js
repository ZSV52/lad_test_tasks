// Задача 3. Быки и коровы
// Компьютер загадывает число из нескольких различающихся цифр (от 3 до 6). Игроку дается несколько попыток на то, чтобы угадать это число. После каждой попытки компьютер сообщает количество совпавших цифр стоящих не на своих местах, а также количество правильных цифр на своих местах. Например загаданное число: 56478 предположение игрока: 52976 ответ: совпавших цифр не на своих местах - 1 (6), цифр на своих местах - 2 (5 и 7). Игра ведется до окончания количества ходов либо до отгадывания.

const readlineSync = require("readline-sync");

const answerNum = createAnswerNum();

let rounds = 10;
let gameOver = false;

while (!gameOver) {
  if (rounds > 0) {
    gameOver = compareWithAnswer(answerNum);
    !gameOver
      ? console.log(`${--rounds} moves left`)
      : console.log("Congratulations, You guessed it!");
  } else {
    gameOver = true;
    console.log(`Game over, hidden number: ${answerNum.join("")}`);
  }
}

// Function for generating a number by the computer
function createAnswerNum() {
  let num = [];
  while (num.length < 5) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!num.includes(randomNum)) {
      num.push(randomNum);
    }
  }
  return num;
}

// Function to compare the hidden number with the user's answer
function compareWithAnswer(arr) {
  let userAnswer = readlineSync.question(
    "Enter a number containing 5 different digits "
  );
  let userAnswArr = userAnswer.split("");

  let bulls = 0;
  let cows = 0;

  userAnswArr.forEach((el, i) => {
    if (+el === arr[i]) {
      bulls++;
    } else if (arr.includes(+el)) {
      cows++;
    }
  });
  console.log(
    `matching digits are not in their places - ${cows}, digits in place - ${bulls}`
  );
  return bulls === 5 ? true : false;
}
