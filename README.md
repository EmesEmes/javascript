# Repaso de JavaScript

## Notas

## Diferencias entre los objetos globales window y document
window y document son dos objetos globales en el entorno del navegador, pero tienen roles diferentes:
1. __*window*__: Es el objeto global en el entorno del navegador. Representa la ventana del navegador y contiene propiedades y métodos para manipular todo lo que está dentro de ella. Esto incluye el documento actual, la ubicación, el historial, las cookies, y también funciones como setTimeout y fetch.
2. __*document*__: Es una propiedad del objeto window y representa el documento HTML actual que se muestra en esa ventana. El objeto document tiene métodos y propiedades para manipular el contenido y la estructura del documento, como getElementById, createElement, appendChild, etc.

## Variables
* Un variable en JavaScript es un contenedor de información que apunta a un lugar en memoria.
* Dicha información puede cambiar o no en el futuro.
* Para inicializar variables se utilizan las palabras reservadas let, var o const.

### Como se recomienda nombrar las variables
1. __*camelCase*__: En esta convención, la primera letra de la primera palabra es en minúsculas, y la primera letra de cada palabra subsiguiente es en mayúsculas. Por ejemplo: miVariable.
2. __*Nombres descriptivos*__: Los nombres de las variables deben ser descriptivos y reflejar el valor que contienen. Por ejemplo, si tienes una variable que contiene el precio de un producto, puedes llamarla precioProducto.
3. __*Evitar nombres o palabras reservadas*__: No debes usar palabras reservadas de JavaScript como nombres de variables. Por ejemplo, no debes usar palabras como var, function, let, etc.
4. __*No usar números al inicio*__: Los nombres de las variables no deben comenzar con un número.
5. __*No usar espacios o caracteres especiales*__: Los nombres de las variables no deben contener espacios o caracteres especiales, con la excepción del guión bajo (_) y el signo de dólar ($).

### Diferencias entre var, let y const
1. __*var*__: Es la forma más antigua de declarar variables. No tiene el concepto de bloque de alcance, lo que significa que las variables declaradas con var son accesibles fuera del bloque en el que se declararon y en archivos externos. Además, permite redeclarar la misma variable en el mismo alcance. Al declarar una variable con var esta se coloca en el objeto global window y tiene el problema de que permite reescribir las propiedades del objeto window. Cuando se utiliza una variable declarada con var antes de declarar la variable da un valor de undefinied pero no da error.
2. __*let*__: Introducido en ES6 (ECMAScript 2015), let tiene un alcance de bloque, lo que significa que la variable sólo es accesible dentro del bloque en el que se declaró. No permite redeclarar la misma variable en el mismo alcance.
3. __*const*__: También introducido en ES6, const es similar a let en que tiene un alcance de bloque. Sin embargo, una vez que una variable es declarada con const, su valor no puede ser reasignado. Esto no significa que la variable sea inmutable, sólo que la asignación de la variable no puede cambiar. Por ejemplo, si la variable es un objeto, las propiedades del objeto aún pueden cambiar.

### Tipos de datos
JavaScript es un lenguaje debilmente tipado lo que significa que nosotros no le decimos  explicitamente a JavaScript el tipo de dato que queremos usar en una variable sino que el propio JavaScript infiere por nosotros el tipo de dato dando simepre prioridad a los string.

El tipo de dato de una variable describe el contenido del valor que tiene la variable.

### Datos primitivos:
Los datos primitivos en JavaScript son los datos que no son objetos y que tienen un valor directamente, no una referencia a un valor. Son inmutables, lo que significa que no pueden ser cambiados una vez creados. Los tipos de datos primitivos en JavaScript son:

1. __*String*__: Representa una secuencia de caracteres. Por ejemplo: 'Hola Mundo'.
1. __*Number*__: Representa un valor numérico. Por ejemplo: 10, 3.14.
1. __*Boolean*__: Representa un valor lógico verdadero o falso. Por ejemplo: true, false.
1. __*Null*__: Representa la ausencia de valor o ningún valor. Por ejemplo: null.
1. __*Undefinied*__: Representa un valor no asignado. Por ejemplo: let a; // a es undefined.
1. __*Symbol*__: Representa un valor único que no es igual a ningún otro valor. Por ejemplo: let sym = Symbol();.
1. __*BigInt*__: Representa un número entero de precisión arbitraria. Por ejemplo: let bigInt = 123n;.


### Arreglos
Los arreglos (arrays) en JavaScript son objetos utilizados para almacenar múltiples valores en una sola variable. Cada valor se asocia con un índice, que se utiliza para acceder al valor. Los índices de los arreglos en JavaScript comienzan en 0, lo que significa que el primer elemento del arreglo está en el índice 0.

Los arreglos pueden contener cualquier tipo de dato en JavaScript, incluyendo números, cadenas, objetos, e incluso otras matrices o funciones.

En JavaScript, hay varias formas de inicializar un arreglo:

1. Inicialización literal: Esta es la forma más común de inicializar un arreglo. Simplemente se enumeran los elementos del arreglo entre corchetes ([]).
```javascript
const arr = ['valor1', 'valor2', 'valor3'];
```
2. Constructor de Array: Puedes usar el constructor Array para crear un arreglo. Esto es menos común y generalmente se usa cuando se conoce el tamaño del arreglo pero aún no se tienen los elementos.

```javascript
let arr2 = new Array(5); // Crea un arreglo con espacio para 5 elementos
```
3. Array.of: Crea una nueva instancia de Array con un número variable de elementos de argumento, independientemente del número o tipo de los argumentos. 
```javascript
let arr3 = Array.of(1, 2, 3); // [1, 2, 3]
```
4. Array.from: Crea una nueva instancia de Array a partir de un objeto iterable.
```javascript
let arr4 = Array.from("Hola"); // ['H', 'o', 'l', 'a']
```

Los arreglos en JavaScript tienen muchos métodos útiles. Aquí están algunos de los más comunes:

1. push(elemento1, ..., elementoN): Añade uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
```javascript
let frutas = ['manzana', 'banana'];
frutas.push('mango');
console.log(frutas); // ['manzana', 'banana', 'mango']
```

2. pop(): Elimina el último elemento de un arreglo y lo devuelve.
```javascript
let frutas = ['manzana', 'banana', 'mango'];
let frutaEliminada = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(frutaEliminada); // 'mango'
```

3. shift(): Elimina el primer elemento de un arreglo y lo devuelve.
```javascript
let frutas = ['manzana', 'banana', 'mango'];
let frutaEliminada = frutas.shift();
console.log(frutas); // ['banana', 'mango']
console.log(frutaEliminada); // 'manzana'
```

4. unshift(elemento1, ..., elementoN): Añade uno o más elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.
```javascript
let frutas = ['banana', 'mango'];
frutas.unshift('manzana');
console.log(frutas); // ['manzana', 'banana', 'mango']
```

5. concat(arr1, ..., arrN): Devuelve un nuevo arreglo formado por este arreglo unido con otros arrays y/o valores.
```javascript
let frutas1 = ['manzana', 'banana'];
let frutas2 = ['mango', 'naranja'];
let todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas); // ['manzana', 'banana', 'mango', 'naranja']
```

6. join(separador): Une todos los elementos de un arreglo en una cadena y la devuelve.
```javascript
let frutas = ['manzana', 'banana', 'mango'];
let frutasComoCadena = frutas.join(', ');
console.log(frutasComoCadena); // 'manzana, banana, mango'
```

7. slice(inicio, fin): Devuelve una copia superficial de una porción del arreglo.
```javascript
let frutas = ['manzana', 'banana', 'mango', 'naranja', 'kiwi'];
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ['banana', 'mango']
```

8. splice(inicio, eliminarCount, item1, ..., itemX): Cambia el contenido de un arreglo eliminando, reemplazando o añadiendo elementos.
```javascript
let frutas = ['manzana', 'banana', 'mango', 'naranja', 'kiwi'];
frutas.splice(2, 1, 'uva');
console.log(frutas); // ['manzana', 'banana', 'uva', 'naranja', 'kiwi']
```

9. reverse(): Invierte el orden de los elementos de un arreglo.
```javascript
let frutas = ['manzana', 'banana', 'mango'];
frutas.reverse();
console.log(frutas); // ['mango', 'banana', 'manzana']
```

10. sort([funcionCpmparadora]): Ordena los elementos de un arreglo in situ y devuelve el arreglo.
```javascript
let numeros = [10, 5, 8, 1, 7];
numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros); // [1, 5, 7, 8, 10]
```

11. indexOf(elemento[, desde]): Devuelve el primer índice en el que se puede encontrar un elemento en el arreglo, o -1 si el elemento no se encontró.
```javascript
let frutas = ['manzana', 'banana', 'mango'];
let indice = frutas.indexOf('banana');
console.log(indice); // 1
```

12. find(función): Devuelve el valor del primer elemento del arreglo que cumple la función de prueba proporcionada.
```javascript
let numeros = [1, 5, 12, 8, 44, 3];
let primerNumeroMayorQue10 = numeros.find(function(numero) {
  return numero > 10;
});
console.log(primerNumeroMayorQue10); // 12
```

13. filter(función): Crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función dada.
```javascript
let numeros = [1, 5, 12, 8, 44, 3];
let numerosMayoresQue10 = numeros.filter(function(numero) {
  return numero > 10;
});
console.log(numerosMayoresQue10); // [12, 44]
```

14. map(función): Crea un nuevo arreglo con los resultados de la llamada a una función para cada elemento del arreglo.
```javascript
let numeros = [1, 2, 3, 4, 5];
let numerosDoblados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numerosDoblados); // [2, 4, 6, 8, 10]
```

15. reduce(función[, valorInicial]): Aplica una función a un acumulador y a cada valor de un arreglo (de izquierda a derecha) para reducirlo a un único valor.
```javascript
let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // 15
```

16. foreach: El método forEach ejecuta una función proporcionada una vez para cada elemento en un arreglo, en orden.
```javascript
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero);
});
```

### Objetos literales
Los objetos literales en JavaScript son una forma de definir objetos utilizando una sintaxis literal, es decir, especificando directamente las propiedades y sus valores en el código. Se definen utilizando llaves {} y se pueden asignar a variables. Cada propiedad se define como un par clave-valor, separados por dos puntos :. Las propiedades se separan entre sí por comas ,.

```javascript
let persona = {
  nombre: 'Emilio',
  edad: 30,
  profesion: 'Desarrollador'
};
```

#### Algunas operaciones con Objetos literales
1. Acceder a propiedades
```javascript
let persona = { nombre: 'Juan', edad: 30 };
console.log(persona.nombre); // 'Juan'
console.log(persona['edad']); // 30
```

2. Modificar propiedades
```javascript
let persona = { nombre: 'Juan', edad: 30 };
persona.nombre = 'Ana';
console.log(persona.nombre); // 'Ana'
```

3. Agregar propiedades
```javascript
let persona = { nombre: 'Juan', edad: 30 };
persona.profesion = 'Desarrollador';
console.log(persona.profesion); // 'Desarrollador'
```

4. Eliminar propiedades
```javascript
let persona = { nombre: 'Juan', edad: 30 };
delete persona.edad;
console.log(persona.edad); // undefined
```

5. Verificar la existencia de propiedades
```javascript
let persona = { nombre: 'Juan', edad: 30 };
console.log('nombre' in persona); // true
console.log('altura' in persona); // false
```

6. Recorrer las propiedades de un objeto
```javascript
let persona = { nombre: 'Juan', edad: 30, profesion: 'Desarrollador' };
for (let propiedad in persona) {
  console.log(`La ${propiedad} de la persona es ${persona[propiedad]}`);
}
```

#### Métos a través del objeto Objecto:

1. Object.keys(objeto): Este método devuelve un arreglo de las propiedades (o claves) del objeto.
```javascript
let persona = { nombre: 'Juan', edad: 30 };
console.log(Object.keys(persona)); // ['nombre', 'edad']
```

2. Object.values(objeto): Este método devuelve un arreglo de los valores de las propiedades del objeto.
```javascript
let persona = { nombre: 'Juan', edad: 30 };
console.log(Object.values(persona)); // ['Juan', 30]
```

3. Object.entries(objeto): Este método devuelve un arreglo de arreglos, donde cada sub-arreglo es un par [clave, valor] del objeto.
```javascript
let persona = { nombre: 'Juan', edad: 30 };
console.log(Object.entries(persona)); // [['nombre', 'Juan'], ['edad', 30]]
```

4. Object.assign(destino, fuente1, fuente2, ...): Este método se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
```javascript
let objeto1 = { a: 1, b: 2 };
let objeto2 = { b: 3, c: 4 };
let combinado = Object.assign({}, objeto1, objeto2);
console.log(combinado); // { a: 1, b: 3, c: 4 }
```

5. Object.freeze(objeto): Este método se utiliza para prevenir la modificación de las propiedades y valores de un objeto, y prevenir la adición y eliminación de propiedades.
```javascript
let persona = { nombre: 'Juan', edad: 30 };
Object.freeze(persona);
persona.nombre = 'Ana'; // No tiene efecto
console.log(persona.nombre); // 'Juan'
```

6. Object.seal(objeto): Este método se utiliza para prevenir la adición y eliminación de propiedades, pero permite la modificación de las propiedades existentes.
```javascript
let persona = { nombre: 'Juan', edad: 30 };
Object.seal(persona);
persona.nombre = 'Ana'; // Sí tiene efecto
console.log(persona.nombre); // 'Ana'
```

