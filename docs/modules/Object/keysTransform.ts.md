---
title: Object/keysTransform.ts
nav_order: 22
parent: Modules
---

## keysTransform overview

Added in v1.0.0-alpha

---

<h2 class="text-delta">Table of contents</h2>

- [object](#object)
  - [keysTransform](#keystransform)

---

# object

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
