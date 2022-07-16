
// Dada una expresion y un objeto que asigna valores a cada
// variable, devuelve el valor correspondiente a una
// expresion.
//
// Ejemplos:
//
// eval(Var("a"), { a: 10 })
// -> 10
//
// eval(Num(7), { a: 10 })
// -> 7
//
// eval(Add(Num(7), Var("a")), { a: 10 })
// -> 17
export function evaluate(e, env) {
	switch (e.tag) {
		case "var": return env[e.name];
		case "num": return e.value;
		case "add": return evaluate(e.e1, env) + evaluate(e.e2, env);
		case "mul": return evaluate(e.e1, env) * evaluate(e.e2, env);
	}
}
