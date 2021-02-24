---
title: Validators/string.ts
nav_order: 17
parent: Modules
---

## string overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateString](#validatestring)

---

# Validators

## validateString

validate string type

**Signature**

```ts
export declare const validateString: (errorMessage: string) => (value: unknown) => E.Left<string> | E.Right<string>
```

Added in v0.0.1
