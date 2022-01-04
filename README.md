# ezell-tools

A collection of mostly functional tools I use within projects

### Why?

I've enjoyed using technologies such as ReScript, jQuery, built-ins such as array methods and promises.

Promises are really neat because if part of the promise chain fails, the rest of the chain branches off and fails gracefully. I wanted that kind method chaining, where we don't need to null check the input of each parameter within a function chain/pipe.

Sure, there are better implementations available but, this toolbelt of mine is something I can bring around to other projects, without lugging about the totality of full FP libraries.

### What's in it?

```js
import { Pipeline } from 'ezell-tools'

const divide = (y: number) => (x: number) => y === 0 ? null : x / y
const divideByTwo = divide(2)
const divideByZero = divide(0)

const five = Pipeline(20).map(divideByTwo).map(divideByTwo).value // 5

const nothing = Pipeline(20).flatMap(divideByTwo).flatMap(divideByZero).value // undefined
```

Nested `Some` types are unwrapped.

### Where would one want to use an Option type?

Many places? Object / dictionary / array lookups can be unsafe. Virtually anywhere one may expect a mixed value of `null | undefined | value`

```js
import { Option } from 'ezell-tools'

const divide = (y) => (x) => Option(y === 0 ? null : x / y)
const divideByFour = divide(4)

const six = divideByFour(20).map((x) => x + 1).value // 6
```

```js
import { Option } from 'ezell-tools'

const contacts = new Map([
  ['John', 'jd@jd.com'],
  ['Jane', 'jned@jned.com']
])

function safeGet(table) {
  return (key) => Option(table.get(key))
}

const getValue = safeGet(contacts)

getValue('Ezell')
  .map((email) => email.split('@'))
  .tap((chunks) => console.log(chunks)) // undefined
```

### Why not use optional chaining and nullish coalescing?

The goal is to abstract away this decision making altogether. One simply works with their data through a pipeline, and the pipeline will branch accordingly if theres a nullish value detected.

# API

`Some` / `None` / `Option` `Pipeline`

```js
import { Some, None, Option } from 'ezell-tools'
```

Each function, `Some`, `None`, `Pipeline`, and `Option` return objects sharing the same interface.

```typescript
interface Pipeline<T> {
  type: 'Some' | 'None'
  value: T
  map: <U>(fn: (x: T) => U) => Pipeline<U>
  tap: (fn: (x: T) => void) => Pipeline<T>
}
```

`Pipeline` is an alias for `Some`
