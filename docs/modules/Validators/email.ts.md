---
title: Validators/email.ts
nav_order: 15
parent: Modules
---

## email overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateEmail](#validateemail)

---

# Validators

## validateEmail

validate email type

**Signature**

```ts
export declare const validateEmail: (errorMessage: string) => <A>(value: A) => E.Left<string> | E.Right<A>
```

Added in v0.0.2
