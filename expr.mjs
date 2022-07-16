
// Estas funciones construyen objetos que representan
// expresiones en el languaje.
export const Add = (e1, e2) => ({ tag: "add", e1, e2 });
export const Mul = (e1, e2) => ({ tag: "mul", e1, e2 });
export const Num = (value)  => ({ tag: "num", value });
export const Var = (name)   => ({ tag: "var", name });
