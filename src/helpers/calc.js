// * CONTAINS ALL CALCULATION FUNCTIONS

// Compute the total value of a filtered array
const filter = (arr, criteria) => {
    return arr.filter(function (obj) {
        return Object.keys(criteria).every(function (c) {
            return obj[c] === criteria[c];
        });
    });
};

const calcTotalOfFiltered = (arr, criteria, criteriaContent, amount) => {
    return filter(arr, { [criteria]: criteriaContent }).reduce((a, b) => a + Number(b[amount]), 0);
};

// * For transactions

// Calculate the total transaction amount of income and expense per day and per month
const computeTransAmounts = (data) => {
  let modifiedData = data;

  const computeMonthlyTotal = (items, amount) => {
      return items.reduce((a, b) => a + b[amount], 0);
  };

  for (let month of modifiedData) {
      for (let days of month.dailyTrans) {
          days.dayIncomeTotal = calcTotalOfFiltered(
              days.transactions,
      "transactionType",
              "income",
              "transactionAmount", 
          );
          days.dayExpenseTotal = calcTotalOfFiltered(
              days.transactions,
      "transactionType",
              "expense",
              "transactionAmount",           
          );

          // Expense is already negative
          days.dayTotal = days.dayIncomeTotal + days.dayExpenseTotal;
      }
      month.monthIncomeTotal = computeMonthlyTotal(month.dailyTrans, "dayIncomeTotal");
      month.monthExpenseTotal = computeMonthlyTotal(month.dailyTrans, "dayExpenseTotal");

      // Expense is already negative
      month.monthTotal = month.monthIncomeTotal + month.monthExpenseTotal;
  }

  return modifiedData;
};

// * For sidebar-accounts

// Calculate total assets
const computeAssets = (item) => {
    return item.filter(({ value }) => value > 0).reduce((a, b) => a + b.value, 0);
};

// Calculate total liabilities
const computeLiabilities = (item) => {
    return item.filter(({ value }) => value < 0).reduce((a, b) => a + b.value, 0);
};

export { calcTotalOfFiltered, filter, computeAssets, computeLiabilities, computeTransAmounts };