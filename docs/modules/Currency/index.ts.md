---
title: Currency/index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Currency](#currency)
  - [currency](#currency)

---

# Currency

## currency

currency formatter

**Signature**

```ts
export declare const currency: (precision?: number) => ICurrencyFormat
```

**Example**

```ts
import { currency } from '@warungpintar/ninshu'
import { fold } from 'fp-ts/Either'
import { flow } from 'fp-ts/function'

const formatter = currency()
const moneyPrint = flow(
  formatter.format,
  fold((e) => e, console.log)
)

moneyPrint(5000)
//> Rp 5000

moneyPrint('hello world')
//> [TypeError: invalid value]
```

Added in v0.0.1
