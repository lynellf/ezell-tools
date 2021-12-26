# ezell-tools

A collection of mostly functional tools I use within projects

### Why?

I've enjoyed using technologies such as ReScript, jQuery, built-ins such as array methods and promises.

Promises are really neat because if part of the promise chain fails, the rest of the chain branches off and fails gracefully. I wanted that kind method chaining, where we don't need to null check the input of each parameter within a function chain/pipe.

Sure, there are better implementations available but, this toolbelt of mine is something I can bring around to other projects, without lugging about the totality of full FP libraries.

### What's in it?

```js
import { Box } from 'ez-tools'

const divide = (y: number) => (x: number) => y === 0 ? null : x / y
const divideByTwo = divide(2)
const divideByZero = divide(0)

const five = Box(20).map(divideByTwo).map(divideByTwo).value // 5

const nothing = Box(20).flatMap(divideByTwo).flatMap(divideByZero).value // undefined
```

### What's the difference between Map and FlatMap methods?

`flatMap` will assume everything is an `Option` type, meaning its contents may be `null` or `undefined`
When a `null` or `undefined` `value` is found, the method chain will branch off and return a `None` type.

Nested `Some` types are unwrapped.

`map` will not make this assumption, and methods will chain without performing any optional value check, always returning a `Some` type.

In short, when it comes to working with plain functions, and its output can be trusted, `map` is good enough.

If the output of the function could be `null` or `undefined`, `flatMap` is preferred when chaining methods.

### Where would one want to use an Option type?

Many places? Object / dictionary / array lookups can be unsafe. Virtually anywhere one may expect a mixed value of `null | undefined | value`

```js
import { Option } from 'ez-tools'

const divide = (y) => (x) => Option(y === 0 ? null : x / y)
const divideByFour = divide(4)

const six = divideByFour(20).map((x) => x + 1).value // 6
```

```js
import { Option } from 'ez-tools'

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
