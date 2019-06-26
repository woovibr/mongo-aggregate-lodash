export const condition = (testExpression: any, trueCaseExpression: any, falseCaseExpression: any) => ({
  $cond: [testExpression, trueCaseExpression, falseCaseExpression],
});

export const equal = (leftSideExpression: any, rightSideExpression: any) => ({
  $eq: [leftSideExpression, rightSideExpression],
});

export const or = (...expressions: any[]) => ({
  $or: expressions,
});

export const divide = (dividendExpression: any, divisorExpression: any) => ({
  $divide: [dividendExpression, divisorExpression],
});

export const multiply = (...expressions: any[]) => ({
  $multiply: expressions,
});

export const map = (inputExpression: any, inExpression: any, as?: string) => ({
  $map: {
    input: inputExpression,
    in: inExpression,
    ...(as ? { as } : {}),
  },
});

export const sum = (expression: any) => ({
  $sum: expression,
});

export const concatArrays = (...expressions: any[]) => ({
  $concatArrays: expressions,
});

export const aggregateIn = (...expressions: any[]) => ({
  $in: expressions,
});
