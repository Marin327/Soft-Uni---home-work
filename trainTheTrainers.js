function solve(input) {
  let n = Number(input[0]);
  let namePresentation = input[1];
  let index = 2; //вече са прочетени 2 елемента

  let presentationCounter = 0;
  let totalGrades = 0;

  while (namePresentation != "Finish") { //цикъл, докато не стигне до елемент Finish
      presentationCounter += 1;
      let counter = index; //Запазваме индекса, защото влиза в условието на цикъла, а го променяме вътре в него
      let currGrades = 0; // Оценки за тази презентация
      for (let i = counter; i < counter + n; i++) { // Цикъл, който се върти от сегашния елемент на масива до сумата на сегашния плюс броя хора в журито- тоест да обходи само оценките за текущата презентация
          index++;         //Вдигаме индекса при обработване на следващ елемент
          currGrades += Number(input[i]);  //Добавяме оценката към оценките за тази презентация
      }

      let averageGradePerPresentation = currGrades / n;    //средна оценка за тази презентация

      console.log(`${namePresentation} - ${averageGradePerPresentation.toFixed(2)}.`); //Изписване на информацията след приключване обработването на тази презентация

      totalGrades += averageGradePerPresentation; //добавяне на оценката за презентацията към сумата от оценки на всички презентации
      namePresentation = input[index];  //Взимане на следващ елемент- име на презентация или Finish
      index++; //Вдигане на индекса след преминаването към следващ елемент
  }
  //Пресмятане на средната оценка от всички презентации
  let totalGradesPrint = totalGrades / presentationCounter;
  console.log(`Student's final assessment is ${totalGradesPrint.toFixed(2)}.`); 
}
solve([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish"
])