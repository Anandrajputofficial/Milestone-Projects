function calculateRentalCost(numDays, carType) {
    let rentalCostPerDay;
    
    switch(carType) {
      case "Economy":
        rentalCostPerDay = 4000;
        break;
      case "Midsize":
        rentalCostPerDay = 10000;
        break;
      case "Luxury":
        rentalCostPerDay = 20000;
        break;
      default:
        return "Invalid car type";
    }
    
    const totalRentalCost = rentalCostPerDay * numDays;
    return totalRentalCost;
  }
  
  // Example usage:
  const numDays = 5;
  const carType = "Midsize";
  const rentalCost = calculateRentalCost(numDays, carType);
  console.log(`Rental cost for ${numDays} days of ${carType} car: Rs. ${rentalCost}/-`);
  