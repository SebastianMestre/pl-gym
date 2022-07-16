
## ejercicios

- modificar el parser para que permita espacios en blanco entre operadores y operandos

- implementar el operador `A - B`, que resta numeros

- implementar el operador `A / B`, que divide numeros

- implementar la operacion `sqrt(A)` que toma la raiz cuadrada de un numero

- implementar los operadores `<`, `<=`, `=`, `>=`, `>` que comparan numeros y devuelven true o false

- implementar `if A then B else C`, que evalua A. Si A da true, evalua y da como resultado B y, en caso contrario, C.

- implementar bloques `{ A1; A2; ...; An }` que evaluan cada expresion en orden, y dan la ultima como resultado.

llamamos sentencias a las expresiones que aparecen en bloques, en posiciones anteriores a la ultima. (O sea, si algo es una sentencia, solo puede aparecer en un bloque, y no puede aparecer en la ultima posicion del bloque)

- implementar la sentencia `X <- B` que modifica el valor de la variable X en el entorno. El valor de la variable X debe restaurarse al terminar de evaluarse el bloque.

- implementar `fun X -> A`, que devuelve una funcion que toma un parametro X, y devuelve A

- implementar `A(B)`, que pasa B como argumento a A, si A es una funcion

## otras ideas

implementar los operadores cons, car y cdr para manipular listas

implementar precedencia de operadores en el parser

implementar sentencias de control de flujo imperativas, como for y while

implementar operaciones de entrada y salida

implementar funciones con varios argumentos

