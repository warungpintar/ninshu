---
title: Integration/reactHooksForm.ts
nav_order: 2
parent: Modules
---

## reactHooksForm overview

Added in v0.0.3

---

<h2 class="text-delta">Table of contents</h2>

- [Integration](#integration)
  - [RHFResolver](#rhfresolver)

---

# Integration

## RHFResolver

React Hooks Form Resolver wrapper for validations

**Signature**

```ts
export declare const RHFResolver: <T extends Record<string, any>>(
  resolver: Resolver<T>
) => (values: Record<keyof T, any>) => Promise<{ values: {}; errors: Record<keyof T, Error> }>
```

Added in v0.0.3
