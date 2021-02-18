---
title: object/keysCamelCase.ts
nav_order: 1
parent: Modules
---

## keysCamelCase overview

Added in v1.0.0-alpha

---

<h2 class="text-delta">Table of contents</h2>

- [object](#object)
  - [keysCamelCase](#keyscamelcase)

---

# object

## keysCamelCase

Recursively transform all keys of object/array to camelCase

**Signature**

```ts
export declare const keysCamelCase: (input: any[] | Record<string, any>) => any[] | Record<string, any>
```

**Example**

```ts
import { keysCamelCase } from '@warungpintar/ninshu'

keysCamelCase({ FULL_NAME: 'rin' }) // output: {fullName: 'rin'}
```

Added in v1.0.0-alpha
