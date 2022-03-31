/*
    Реализовать класс ATM (банкомат)
    которй принимает на вход limit. например { 5000: 10, 1000: 15, 500: 20, 100: 30 }
    свойство limit внутри класса должно быть защищенным

    пример:
    const atm = new ATM({ 5000: 10, 1000: 15, 500: 20, 100: 30 });
    console.log(atm.getMoney(99900)); // столько денег нет
    console.log(atm.getMoney(29900)); // 5X5000 4X1000 1X500 4X100 
    console.log(atm.getMoney(11500)); // 2X5000 1X1000 1X500
    console.log(atm.getMoney(4500)); // 4X1000 1X500 
*/

function atm(limit, moneyRequested) {
  // 1) найти общую сумму денег в банкомате согласно лимиту
  const totalMoneyAmount = Object.entries(limit).reduce(
    (acc, [banknote, amount]) => acc + banknote * amount,
    0
  );
  console.log(totalMoneyAmount);
  // 2) определяем номиналы купюр согласно лимиту
  const moneyNominals = Object.keys(limit).sort((a, b) => b - a);
  console.log(moneyNominals);
  // 3) если запрашиваемая сумма больше количества денег в банкомате
  if (moneyRequested > totalMoneyAmount) {
    return "Sorry, not enough money";
  }

  let result = "";

  for (let i = 0; moneyRequested || i < moneyNominals.length; i++) {
    // 4) определяем кол-во банкнот каждого номинала, которое необходимо выдать
    let banknoteAmount = Math.floor(moneyRequested / moneyNominals[i]);
    // 5) если необходимое кол-во банкнот данного номинала = 0, двигаемся дальше
    if (banknoteAmount <= 0) {
      continue;
    }
    // 6) если необходимое кол-во банкнот больше их общего количества, то забираем все что есть
    if (banknoteAmount > limit[moneyNominals[i]]) {
      banknoteAmount = limit[moneyNominals[i]];
    }
    // 7) изменяем остаток банкнот в банкомате
    limit[moneyNominals[i]] -= banknoteAmount;
    result += `${banknoteAmount} х ${moneyNominals[i]}; `;

    moneyRequested -= moneyNominals[i] * banknoteAmount;

    if (moneyRequested === 0) {
      break;
    }
  }
  return result;
}

console.log(atm({ 5000: 10, 1000: 15, 500: 20, 100: 30 }, 64500));
