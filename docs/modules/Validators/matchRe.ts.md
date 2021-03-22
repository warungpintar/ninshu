---
title: Validators/matchRe.ts
nav_order: 18
parent: Modules
---

## matchRe overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateMatchRe](#validatematchre)

---

# Validators

## validateMatchRe

validate string with regex

**Signature**

```ts
export declare const validateMatchRe: (re: RegExp, errorMessage: string) => <A>(value: A) => E.Left<string> | E.Right<A>
```

Added in v0.0.1
