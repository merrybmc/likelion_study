// Common JS 모듈 시스템 (CJS)

// const muduleData = require('./math');

// console.log(muduleData.add(1, 2));
// console.log(muduleData.sub(1, 2));

// ES 모듈 시스템 (ESM)

import { add, sub } from './math.js';
import multiply from './math.js';

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(1, 2));
