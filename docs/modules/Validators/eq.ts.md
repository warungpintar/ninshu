---
title: Validators/eq.ts
nav_order: 25
parent: Modules
---

## eq overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Is](#is)
  - [isEq](#iseq)

---

# Is

## isEq

check equality of the value

**Signature**

```ts
export declare const isEq: <A>(a: A) => (b: A) => boolean
```

**Example**

```ts
import { isEq } from '@warungpintar/ninshu'

const isTen = isEq(10)

console.log(isTen(10))
//> true

console.log(isTen(20))
//> false
```

Added in v0.0.2
