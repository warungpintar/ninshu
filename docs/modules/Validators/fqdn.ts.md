---
title: Validators/fqdn.ts
nav_order: 27
parent: Modules
---

## fqdn overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateFqdn](#validatefqdn)

---

# Validators

## validateFqdn

validate Fully qualified domain name

**Signature**

```ts
export declare const validateFqdn: <E>(e: E) => <A>(val: A) => Either<E, unknown extends A ? any : A>
```

Added in v0.0.2
