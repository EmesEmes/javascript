# Repaso de JavaScript

## Notas

#### Diferencias entre los objetos globales window y document
window y document son dos objetos globales en el entorno del navegador, pero tienen roles diferentes:
1. __*window*__: Es el objeto global en el entorno del navegador. Representa la ventana del navegador y contiene propiedades y métodos para manipular todo lo que está dentro de ella. Esto incluye el documento actual, la ubicación, el historial, las cookies, y también funciones como setTimeout y fetch.
2. __*document*__: Es una propiedad del objeto window y representa el documento HTML actual que se muestra en esa ventana. El objeto document tiene métodos y propiedades para manipular el contenido y la estructura del documento, como getElementById, createElement, appendChild, etc.

### Variables
* Un variable en JavaScript es un contenedor de información que apunta a un lugar en memoria.
* Dicha información puede cambiar o no en el futuro.
* Para inicializar variables se utilizan las palabras reservadas let, var o const.

#### Como se recomienda nombrar las variables
1. __*camelCase*__: En esta convención, la primera letra de la primera palabra es en minúsculas, y la primera letra de cada palabra subsiguiente es en mayúsculas. Por ejemplo: miVariable.
2. __*Nombres descriptivos*__: Los nombres de las variables deben ser descriptivos y reflejar el valor que contienen. Por ejemplo, si tienes una variable que contiene el precio de un producto, puedes llamarla precioProducto.
3. __*Evitar nombres o palabras reservadas*__: No debes usar palabras reservadas de JavaScript como nombres de variables. Por ejemplo, no debes usar palabras como var, function, let, etc.
4. __*No usar números al inicio*__: Los nombres de las variables no deben comenzar con un número.
5. __*No usar espacios o caracteres especiales*__: Los nombres de las variables no deben contener espacios o caracteres especiales, con la excepción del guión bajo (_) y el signo de dólar ($).

#### Diferencias entre var, let y const
1. __*var*__: Es la forma más antigua de declarar variables. No tiene el concepto de bloque de alcance, lo que significa que las variables declaradas con var son accesibles fuera del bloque en el que se declararon y en archivos externos. Además, permite redeclarar la misma variable en el mismo alcance. Al declarar una variable con var esta se coloca en el objeto global window y tiene el problema de que permite reescribir las propiedades del objeto window. Cuando se utiliza una variable declarada con var antes de declarar la variable da un valor de undefinied pero no da error.
2. __*let*__: Introducido en ES6 (ECMAScript 2015), let tiene un alcance de bloque, lo que significa que la variable sólo es accesible dentro del bloque en el que se declaró. No permite redeclarar la misma variable en el mismo alcance.
3. __*const*__: También introducido en ES6, const es similar a let en que tiene un alcance de bloque. Sin embargo, una vez que una variable es declarada con const, su valor no puede ser reasignado. Esto no significa que la variable sea inmutable, sólo que la asignación de la variable no puede cambiar. Por ejemplo, si la variable es un objeto, las propiedades del objeto aún pueden cambiar.

#### Tipos de datos
JavaScript es un lenguaje debilmente tipado lo que significa que nosotros no le decimos  explicitamente a JavaScript el tipo de dato que queremos usar en una variable sino que el propio JavaScript infiere por nosotros el tipo de dato dando simepre prioridad a los string.

El tipo de dato de una variable describe el contenido del valor que tiene la variable.

#### Datos primitivos:
Los datos primitivos en JavaScript son los datos que no son objetos y que tienen un valor directamente, no una referencia a un valor. Son inmutables, lo que significa que no pueden ser cambiados una vez creados. Los tipos de datos primitivos en JavaScript son:

1. __*String*__: Representa una secuencia de caracteres. Por ejemplo: 'Hola Mundo'.
1. __*Number*__: Representa un valor numérico. Por ejemplo: 10, 3.14.
1. __*Boolean*__: Representa un valor lógico verdadero o falso. Por ejemplo: true, false.
1. __*Null*__: Representa la ausencia de valor o ningún valor. Por ejemplo: null.
1. __*Undefinied*__: Representa un valor no asignado. Por ejemplo: let a; // a es undefined.
1. __*Symbol*__: Representa un valor único que no es igual a ningún otro valor. Por ejemplo: let sym = Symbol();.
1. __*BigInt*__: Representa un número entero de precisión arbitraria. Por ejemplo: let bigInt = 123n;.


#### Arreglos
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

