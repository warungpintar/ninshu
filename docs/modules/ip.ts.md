---
title: ip.ts
nav_order: 5
parent: Modules
---

## ip overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Either](#either)
  - [ip](#ip)
  - [ipv4](#ipv4)
  - [ipv6](#ipv6)
- [Is](#is)
  - [isIPv4](#isipv4)
  - [isIPv6](#isipv6)
  - [isIp](#isip)
- [Validators](#validators)
  - [validateIPv4](#validateipv4)
  - [validateIPv6](#validateipv6)
  - [validateIp](#validateip)

---

# Either

## ip

ip either

**Signature**

```ts
export declare const ip: <A>(val: A) => E.Right<A> | E.Left<A>
```

Added in v0.0.6

## ipv4

ipv4 either

**Signature**

```ts
export declare const ipv4: <A>(val: A) => E.Right<A> | E.Left<A>
```

Added in v0.0.6

## ipv6

ipv6 either

**Signature**

```ts
export declare const ipv6: <A>(val: A) => E.Right<A> | E.Left<A>
```

Added in v0.0.6

# Is

## isIPv4

Validate IPv4

**Signature**

```ts
export declare const isIPv4: <A>(val: A) => boolean
```

Added in v0.0.2

## isIPv6

Validate IPv6

**Signature**

```ts
export declare const isIPv6: <A>(val: A) => boolean
```

Added in v0.0.2

## isIp

check if it's ipv4 / ipv6

**Signature**

```ts
export declare const isIp: <A>(val: A) => boolean
```

Added in v0.0.2

# Validators

## validateIPv4

validate ipv6

**Signature**

```ts
export declare const validateIPv4: <E>(b: E) => <A>(a: A) => E.Either<E, string>
```

Added in v0.0.2

## validateIPv6

validate ipv6

**Signature**

```ts
export declare const validateIPv6: <E>(b: E) => <A>(a: A) => E.Either<E, string>
```

Added in v0.0.2

## validateIp

validate ipv4 / ipv6

**Signature**

```ts
export declare const validateIp: <E>(b: E) => <A>(a: A) => E.Either<E, string>
```

Added in v0.0.2
