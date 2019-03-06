'use strict'

//LESSON 6

//1. Функция принимает какой-то текст и массив спам-слов.
// Функция должна вернуть true, если текст содержит слова из
// списка spamWords или false если не содержит. Функция не должна
// быть чувствительна к регистру (если слово в списке спама "новинка",
// а в тексте "НоВиНкА" - то это спам)

function isSpam(text, spamWords) {
  let arrStr = text.split(' ');
  console.log(arrStr);
  for (let i = 0; i < arrStr.length; i++) {
    let word = arrStr[i].toLowerCase();
    if (word === spamWords) {
      return true;
    };
  };
   return false;
};
// Вызовы функции для проверки
console.log( isSpam(('Мы знаем кто мы есть но не знаем кем мы можем быть'), ('мёд' ) )); // false
console.log( isSpam(('Так сладок мёд что наконец он горек Избыток вкуса убивает вкус'), ('мёд' ) )); // true


//2. Функция принимает массив имен. Имена могут быть в любом виде:
// пЕтя, Артём, катя, МаШа. Функция должна вернуть строку с нормализованными
// именами, разделенными запятой и пробелом: "Петя, Артём, Катя, Маша"

 function getCapitalizedString(text) {
   let arrStr = text.split(' ');
   let str = [];
   for (let i = 0; i < arrStr.length; i++) {
     let word = arrStr[i].toLowerCase();
         word = word.charAt(0).toUpperCase(0) + word.substr(1);;  // Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.
         str.push(word);
   };
     return (str.join(" "));   // Метод join() объединяет все элементы массива
 };
console.log( getCapitalizedString("пЕтя, Артём, катя, МаШа"));  // Петя, Артём, Катя, Маша


// 3. Функция принимает массив имен. Функция должна выбрать случайное имя
// из массива и вернуть строку: “{{Имя}} сегодня дежурный в классе.”

function chooseDuty(name) {
  let arr = [...name];
  let random = Math.floor((Math.random() * (arr.length)));
  return name[random];
}
console.log( chooseDuty(["Петя", "Артём", "Катя", "Маша"]));


// 4. Реализуйте функцию, которая обрезает длинный текст по следующему
// принципу: если количество символов этого текста больше заданного
// в аргументе n, то в переменную result запишем первые n символов
// строки str и добавим в конец троеточие '...'. В противном случае
// в переменную result запишем содержимое переменной str.
// Функция должна вернуть result.

function cutText(str, n) {
    let strLength = str.split("");   // Разбиваем строку на массив символов
    let arr = str.split("", n);      // Разбиваем строку на массив символов и обрезаем до n символов
    let result = arr.join('');       // Сливаем массив в строку
      if (strLength.length > n) {    // Если количество символов в строке больше
         result = result + "...";    // заданного в аргументе n, то в конце
      };                             // добавляем "..."
  return result;
};
console.log(cutText(("О чудо! Какое множество прекрасных лиц! Как род людской красив!"), (30)));


// 5. В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31.12.2025'.

var date = "2025-12-31"
function converDate(date) {
  let arr = date.split("");
  let newFormatDate = arr[8]+arr[9]+"."+arr[5]+arr[6]+"."+arr[0]+arr[1]+arr[2]+arr[3];
  return newFormatDate;
};
console.log(converDate(date));
