# tiny-omit

[![source](https://badgen.net/npm/v/@ngard/tiny-omit)](https://www.npmjs.com/package/@ngard/tiny-omit)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-omit)](https://bundlephobia.com/result?p=@ngard/tiny-omit)
[![build status](https://badgen.net/travis/NickGard/tiny-omit)](https://travis-ci.org/NickGard/tiny-omit)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal utility equivalent to `lodash.omit`. For when every byte counts!

<hr/>

lodash.omit: [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.omit)](https://bundlephobia.com/result?p=lodash.omit)
<br/>
tiny-omit: [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-omit)](https://bundlephobia.com/result?p=@ngard/tiny-omit)

<hr/>

## Install

```sh
npm install @ngard/tiny-omit
```

## Syntax

```javascript
omit(/* source, key [, key2, ...] */);
```

## Parameters

`source` - `[Object|Array]` The object whose key/value pairs will be omitted.
`key [, key2, ...]` - `[String|Array<String>]` An array or list of key names.

## Returns
An object comprised of the un-omitted key/value pairs.

## Example

```javascript
import { omit } from '@ngard/tiny-omit';

const person = {
  name: 'Luke Skywalker',
  description: 'whiny Jedi',
  address: '312 Sand St, Tatooine',
  SSN: '123456789'
}

const safe = omit(person, 'address', 'SSN');
// { name: 'Luke Skywalker', description: 'whiny Jedi' }

const safe = omit(person, ['address', 'SSN']);
// { name: 'Luke Skywalker', description: 'whiny Jedi' }

/* Omitting Array indexes */
omit(['a', 'b', 'c'], 0, 2); // { 1: 'b' }
```
