---
title: Validators/matchRe.ts
nav_order: 14
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
export declare const validateMatchRe: (
  re: RegExp,
  errorMessage: string
) => (value: unknown) => E.Left<string> | E.Right<unknown>
```

Added in v0.0.1
