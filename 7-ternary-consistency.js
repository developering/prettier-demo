// NESTED TERNARY(https://stackoverflow.com/questions/10526739/a-somewhat-painful-triple-nested-ternary-operator)
const H =
  C == 0 ? null            :
  V == r ? (g - b) / C     :
  V == g ? (b - r) / C + 2 :
           (r - g) / C + 4 ;


const H = C == 0
  ? null
  : V == r
      ? (g - b) / C
      : V == g
          ? (b - r) / C + 2
          : (r - g) / C + 4


const H = (C == 0 ? null :
    V == r ? (g - b) / C :
    V == g ? (b - r) / C + 2 :
             (r - g) / C + 4
    );



// SINGLE TERNARY
function getResolvedId() {
  return this.resolvedId
    ? Promise.resolve(this.resolvedId)
    : new Promise((resolve, reject) => this.resolves.push(resolve));
}

Budget.prototype.firstIncomeItem = function() {
  let incomeGroup = this.incomeGroups().first();
  let hasIncomeItem =
    incomeGroup && incomeGroup.items && incomeGroup.items.size;

  return hasIncomeItem ? incomeGroup.items.first() : null;
};
