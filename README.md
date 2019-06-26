# Mongo Aggregate Lodash

This package will make you write aggregate in a more terse way much like lodash utilities

## How to install
```bash
yarn add @entria/mongo-aggregate-lodash
```

## Examples

- Without using `mongo-aggregate-lodash`

````jsx
{
  $group: {
     averageDividend: {
        $sum: {
          $multiply: ['$score', '$field.weight'],
        }
    },
    averageDivisor: {
       $sum: '$field.weight'
    },
  }
}
````

- Using `mongo-aggregate-lodash` 
```jsx
import { sum, multiply } from '@entria/mongo-aggregate-lodash';

{
  $group: {
     averageDividend: sum(multiply('$score', '$field.weight')),
      averageDivisor: sum('$field.weight'),
  }
}
```
