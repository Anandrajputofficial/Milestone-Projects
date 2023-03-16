function calculateBill(dishCosts, numPeople) {
    const totalCost = dishCosts.reduce((acc, cost) => acc + cost, 0);
    const perPersonCost = totalCost / numPeople;
    const billSplit = dishCosts.map((cost) => ({
      dishCost: cost,
      personCost: cost / numPeople,
    }));
    
    return {
      totalCost: totalCost,
      billSplit: billSplit,
      perPersonCost: perPersonCost,
    };
  }

  const dishCosts = [10, 15, 20];
const numPeople = 4;
const result = calculateBill(dishCosts, numPeople);

console.log(result.totalCost); // output: 45
console.log(result.perPersonCost); // output: 11.25
console.log(result.billSplit); // output: [{dishCost: 10, personCost: 2.5}, {dishCost: 15, personCost: 3.75}, {dishCost: 20, personCost: 5}]
