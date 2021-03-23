---
title: Validators/ip.ts
nav_order: 22
parent: Modules
---

## ip overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateIPv4](#validateipv4)
  - [validateIPv6](#validateipv6)
  - [validateIp](#validateip)

---

# Validators

## validateIPv4

validate ipv6

**Signature**

```ts
export declare const validateIPv4: <E>(b: E) => <A>(a: A) => Either<E, string>
```

Added in v0.0.2

## validateIPv6

validate ipv6

**Signature**

```ts
export declare const validateIPv6: <E>(b: E) => <A>(a: A) => Either<E, string>
```

Added in v0.0.2

## validateIp

validate ipv4 / ipv6

**Signature**

```ts
export declare const validateIp: <E>(b: E) => <A>(a: A) => Either<E, string>
```

Added in v0.0.2
