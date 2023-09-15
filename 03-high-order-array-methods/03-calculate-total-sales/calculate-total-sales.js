function calculateTotalSalesWithTax(arr, perct) {
  let sales = 0;

  arr.map((val) => {
    sales += val.quantity * val.price;
  });

  return (1 + perct / 100) * sales;
}

module.exports = calculateTotalSalesWithTax;
