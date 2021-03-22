---
title: Validators/fqdn.ts
nav_order: 16
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
export declare const validateFqdn: (errorMessage: string) => <A>(value: A) => E.Left<string> | E.Right<A>
```

Added in v0.0.2
