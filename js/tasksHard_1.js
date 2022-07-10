const income = Number(prompt('Укажите ваш доход: ', 0));

if (isNaN(income)) {
  alert('Вы ввели некорректные данные. Пожалуйста, указывайте числа.');
} else if (income < 15000) {
  console.log('Налог для вас составляет: ' + (income * 0.13));
} else if (income >= 15000 && income < 50000) {
  console.log('Налог для вас составляет: ' + (income * 0.2));
} else if (income >= 50000) {
  console.log('Налог для вас составляет: ' + (income * 0.3));
}