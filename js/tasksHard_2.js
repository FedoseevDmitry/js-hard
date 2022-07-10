const income2 = Number(prompt('Укажите ваш доход: ', 0));

if (isNaN(income2)) {
  alert('Вы ввели некорректные данные. Пожалуйста, указывайте числа.');
} else if (income2 < 15000) {
  console.log('Налог для вас составляет: ' + (income2 * 0.13));
} else if (income2 >= 15000 && income2 < 50000) {
  let tax = (income2 - 15000) * 0.2 + 15000 * 0.13;
  console.log('Налог для вас составляет: ' + tax);
} else if (income2 >= 50000) {
  let tax = (income2 - 50000) * 0.3 + 50000 * 0.2;
  console.log('Налог для вас составляет: ' + tax);
}