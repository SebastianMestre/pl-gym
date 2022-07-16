import { parse } from './parser.mjs';
import { evaluate } from './eval.mjs';

const expr = parse("(15*20)+abc");
console.log(expr);

const result = evaluate(expr, { abc: 10 });
console.log(result);
