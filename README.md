[![npm version](https://img.shields.io/npm/v/bootstrap3-native.svg?style=flat-square)](https://www.npmjs.com/package/bootstrap3-native)
[![npm downloads](https://img.shields.io/npm/dm/bootstrap3-native.svg?style=flat-square)](https://www.npmjs.com/package/bootstrap3-native)

# Description
bootstrap3-native is a fixed fork from [bootstrap.native](https://github.com/thednp/bootstrap.native).
This version:
* contains types;
* allows you to build isomorphic web applications;
* hasn't got an automatic initialization of components.

# Installation
`npm install bootstrap3-native`

# Usage
```typescript
import { Modal } from 'bootstrap3-native';

var el = document.getElementById("myModal");
var modal = new Modal(el);
modal.show();
```