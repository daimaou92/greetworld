# greetworld
A node.js module that just greets the world.
Small test package made to investigate creating npm modules with in-built typescript support.
Main goal of publishing this is as an example for the underlying structure.

## Installation
```sh
npm install greetworld --save
```

## Usage

### Javascript
```javascript
var _g = require("greetworld");
_g.Greet();
```
```sh
Output ---> 'HELLO WORLDDDDDDD!!'
```

### Typescript
```typescript
import {Greet} from 'greetworld';
Greet(); 
```
```sh
Output ---> 'HELLO WORLDDDDDDD!!'
```

## Test
```sh
npm test
```

