# ez-tools

A collection of mostly functional tools I use within projects

### Why?

I've enjoyed using technologies such as ReScript, jQuery, built-ins such as array methods.

In short, I'm learning I'm a fan of functional programming.

So, this toolbelt of mine is something I can bring around to other projects, without lugging about the totality of libraries.

### What's in it?

```js
import Box from 'ez-tools'

const divide = (y: number) => (x: number) => y === 0 ? null : x / y
const divideByTwo = divide(2)
const divideByZero = divide(0)

const five = Box(20).flatMap(divideByTwo).flatMap(divideByTwo)
```
