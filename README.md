# Ninshu
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://github.com/warungpintar/ninshu/actions/workflows/test.yml/badge.svg)](https://github.com/warungpintar/ninshu/actions?query=workflow%3Abuild-test)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<img src="./screenshot.svg?raw=true" alt="Screenshot" width="256" />

**Ninshu** is a modern JavaScript utility library delivering modularity, performance & extras

## Menu

  - [Features](#features)
  - [Install](#install)
  - [Quick Start](#quick-start)
  - [APIs](#apis)
  - [Roadmap](#roadmap)
  - [FAQ](#faq)
  - [Contributing](#contributing)
  
## Features

- **🏀 Declarative:** Easy to learn
- **⚛️ Functional:** Drove us to functional programming.

## Prerequisite

- NodeJS 10.x above

## Install
#### Install with yarn

```shell
yarn add @warungpintar/ninshu
```

#### or using npm
```shell
npm install @warungpintar/ninshu
```

## Quick Start

```javascript
import { currency } from '@warungpintar/ninshu'
import { fold } from 'fp-ts/Either'
import { flow } from 'fp-ts/function'

const formatter = currency()
const moneyPrint = flow(formatter.format, fold(console.log, console.log))

moneyPrint(5000)
//> Rp 5000

moneyPrint('hello world')
//> value should be a number
```

and boom! 💥

## APIs

Read reserved api at our [official docs](https://warungpintar.github.io/ninshu/docs/modules) here.

## FAQ

**What is Ninshu word came from ?**

We are inspired by terms in Anime/Manga Naruto. It's way similar to this library goals.

You can read details at [https://naruto.fandom.com/wiki/Ninsh%C5%AB](https://naruto.fandom.com/wiki/Ninsh%C5%AB)

## Roadmap

No plans have been made so far to the roadmp. We only support merging from upstream for now.

## Contributing 

Feel like contributing? That's awesome! We have a
[contributing guide](./CONTRIBUTING.md) to help guide you.
