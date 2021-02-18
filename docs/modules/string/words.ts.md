---
title: string/words.ts
nav_order: 7
parent: Modules
---

## words overview

Added in v1.0.0-alpha

---

<h2 class="text-delta">Table of contents</h2>

- [string](#string)
  - [words](#words)

---

# string

## words

Splits `string` into an array of its words.

**Signature**

```ts
export declare const words: (input: string, pattern?: RegExp | string) => string[]
```

**Example**

```ts
import { words } from '@warungpintar/ninshu'

words('camelCase') // output: ['camel', 'Case']
```

Added in v1.0.0-alpha
