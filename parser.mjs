import { Add, Mul, Num, Var } from './expr.mjs';

// Esta funcion convierte un string con una expresion en el
// lenguaje a su representacion con objetos.
//
// Ejemplos:
//
// parse("155")
// -> Num(155)
//
// parse("abc")
// -> Var("abc")
//
// parse("1+(x*y)")
// -> Add(Num(1), Mul(Var("x"), Var("y")))
export function parse(str) {
	str = str + "$";

	let cursor = 0;
	return parseBinop();

	// reconoce expresiones con operadores como '+' y '*'
	function parseBinop() {
		let lhs = parseSimple();
		while (1) {
			let op = parseOp();
			if (!op) break;
			lhs = op(lhs, parseSimple());
		}
		return lhs;
	}

	// reconoce expresiones que van entre operadores, como '15' y '(a+b)'
	function parseSimple() {
		if (isDigit(str[cursor])) { // literal numerico
			const p0 = cursor;
			while (isDigit(str[++cursor]));
			return Num(Number(str.slice(p0, cursor)));
		} else if (str[cursor] == '(') { // expresion envuelta en parentesis
			cursor++;
			const e = parseBinop();
			if (str[cursor] == ')') {
				cursor++;
				return e;
			}
		} else if (isAlpha(str[cursor])) { // variable
			const p0 = cursor;
			while (isAlnum(str[++cursor]));
			return Var(str.slice(p0, cursor));
		}
		return null;
	}

	function parseOp() {
		switch (str[cursor]) {
		case '+': return (cursor++, Add);
		case '*': return (cursor++, Mul);
		default:  return null;
		}
	}

	function isAlpha(s) {
		return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').includes(s);
	}

	function isDigit(s) {
		return "0123456789".split('').includes(s);
	}

	function isAlnum(s) {
		return isAlpha(s) || isDigit(s);
	}
}
