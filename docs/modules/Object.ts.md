---
title: Object.ts
nav_order: 12
parent: Modules
---

## Object overview

Added in v1.0.0-alpha

---

<h2 class="text-delta">Table of contents</h2>

- [object](#object)
  - [keysCamelCase](#keyscamelcase)
  - [keysSnakeCase](#keyssnakecase)
  - [keysTransform](#keystransform)

---

# object

## keysCamelCase

Recursively transform all keys of object/array to camelCase

**Signature**

```ts
export declare const keysCamelCase: (input: any) => any
```

**Example**

```ts
import { keysCamelCase } from '@warungpintar/ninshu'

keysCamelCase({ FULL_NAME: 'rin' }) // output: {fullName: 'rin'}
```

Added in v1.0.0-alpha

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

## keysTransform

Recursively transform all keys of object/array with custom processor

**Signature**

```ts
export declare const keysTransform: (processor: (input: string) => string) => (input: any) => any
```

**Example**

```ts
import { keysTransform } from '@warungpintar/ninshu'

keysTransform((s: string) => s.toLowerCase())({ FULLNAME: 'rin' }) // output: {fullname: 'rin'}
```

Added in v1.0.0-alpha
