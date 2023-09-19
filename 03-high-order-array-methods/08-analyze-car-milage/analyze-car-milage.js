function analyzeCarMileage(arr) {
  let avgMileage = (
    arr.reduce((a, b) => a + b.mileage, 0) / arr.length
  ).toFixed(2);
  let totalMileage = arr.reduce((a, b) => a + b.mileage, 0).toFixed(2);

  let highestMileage = 0;
  let highest;

  arr.forEach((element) => {
    if (element.mileage > highestMileage) {
      highestMileage = element.mileage;
      highest = element;
    }
  });

  let lowestMileage = 1000000;
  let lowest;

  arr.forEach((element) => {
    if (element.mileage < lowestMileage) {
      lowestMileage = element.mileage;
      lowest = element;
    }
  });

  return {
    averageMileage: +avgMileage,
    highestMileageCar: highest,
    lowestMileageCar: lowest,
    totalMileage: +totalMileage,
  };
}

module.exports = analyzeCarMileage;
