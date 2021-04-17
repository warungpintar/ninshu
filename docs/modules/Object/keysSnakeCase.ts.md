---
title: Object/keysSnakeCase.ts
nav_order: 21
parent: Modules
---

## keysSnakeCase overview

Added in v1.0.0-alpha

---

<h2 class="text-delta">Table of contents</h2>

- [object](#object)
  - [keysSnakeCase](#keyssnakecase)

---

# object

## keysSnakeCase

Recursively transform all keys of object/array to snake_case

**Signature**

```ts
export declare const keysSnakeCase: (input: any) => any
```

**Example**

```ts
import { keysSnakeCase } from '@warungpintar/ninshu'

keysSnakeCase({ fullName: 'rin' })
// => output: {full_name: 'rin'}
```

Added in v1.0.0-alpha
