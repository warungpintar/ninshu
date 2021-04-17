---
title: Object/path.ts
nav_order: 23
parent: Modules
---

## path overview

Added in v0.0.5

---

<h2 class="text-delta">Table of contents</h2>

- [object](#object)
  - [path](#path)

---

# object

## path

Retrieve the value at a given path.

**Signature**

```ts
export declare const path: (pth: string) => <A>(a: Record<string, A>) => O.Option<A>
```

**Example**

```ts
import { path } from '@warungpintar/ninshu'

const data = {
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  age: 40,
}

const takeFirstName = path('name.firstname')
const takeLastName = path('name.lastname')
const takeHobbies = path('hobbies')

takeFirstName(data)
// Some("john")

takeLastName(data)
// Some("doe");

takeHobbies(data)
// None
```

Added in v0.0.5
