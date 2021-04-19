---
title: String.ts
nav_order: 25
parent: Modules
---

## String overview

Added in v1.0.0-alpha

---

<h2 class="text-delta">Table of contents</h2>

- [string](#string)
  - [camelCase](#camelcase)
  - [snakeCase](#snakecase)
  - [words](#words)

---

# string

## camelCase

convert `string` to
[camelCase](https://en.wikipedia.org/wiki/Camel_case)

**Signature**

```ts
export declare const camelCase: (input: string) => string
```

**Example**

```ts
import { camelCase } from '@warungpintar/ninshu'

camelCase('camel_case') // output: camelCase
```

Added in v1.0.0-alpha

## snakeCase

convert `string` to
[snake_case](https://en.wikipedia.org/wiki/Snake_case)

**Signature**

```ts
export declare const snakeCase: (input: string) => string
```

**Example**

```ts
import { snakeCase } from '@warungpintar/ninshu'

snakeCase('snakeCase') // output: snake_case
```

Added in v1.0.0-alpha

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
