---
title: Operators/and.ts
nav_order: 21
parent: Modules
---

## and overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Operators](#operators)
  - [and](#and)

---

# Operators

## and

and operator

**Signature**

```ts
export declare const and: (a: Fn) => (b: Fn) => <A>(val: A) => boolean
```

**Example**

```ts
import { and, isEq, isNumber } from '@warungpintar/ninshu'

const isNine = and(isNumber)(isEq(9))

console.log(isNine(9))
//> true
```

Added in v0.0.2
