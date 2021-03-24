---
title: Validators/matchRe.ts
nav_order: 28
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
export declare const validateMatchRe: <E>(re: RegExp, e: E) => <A>(a: A) => Either<E, unknown extends A ? any : A>
```

Added in v0.0.1
