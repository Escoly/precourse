<img src="http://www.skylabcoders.com/images/403/default.png" alt="Skylab" style="width:200px;height:45px;">

## Funciones

### [Leer antes de proseguir!](https://developer.mozilla.org/en-US/docs/Web/js/Guide/Functions)

### Diferencia entre console.log y return
Console.log solamente muestra el valor de lo que introduzcas entre paréntesis en la consola.

Return tiene doble funcionalidad. Primero devuelve un valor para ser almacenado o tratado posteriormente, además corta el flujo de la función. Es decir, las líneas de código después un return no se ejecutan.

Por defecto todas las funciones tienen un "return undefined".

```js
function fun() {
    return "Hello, world!";
}
var a=fun(); //undefined
console.log(a); //"Hello, world!"

function fun2() {
    console.log("Hello,world!");
}

var b=fun2(); //"Hello,world!"
console.log(b); //undefined


function fun3() {
    console.log("hola");
    return;
    console.log("mundo");
}

fun3(); //hola
```

**Ejercicios:**

a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
```js
function (myName){
    console.log('hello + myName')//output: 'hello myName'
}
```

b) Intenta *retornar* los valores en lugar de usar *console.log*
```js
function (myName){
    return 'hello + myName' // output: 'hello myName'
}
```

c) Ahora, añade tu edad y concaténala al return
```js
return 'myMessage' //output: 'hello myName, you're myAge years old.'
```

d) Iguala tu función a una variable y ejecútala
```js
var MyFunction = ... //output: 'hello myName, you're myAge years old.'
myFunction()
```

e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados 
Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.
```js
myName() + myAge() //output: IronMan 40
```

f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
```js
var...
var...
myName(param1) + myAge(param2) //output: IronMan 43

```

g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
```js
function ... (){
    var x = myName(param1)
    var y = myAge(param2)
    return x + y
} //output: IronMan 40
```


h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
```js
return x + y // output: IronMan 6457689
```

i) Al return de la función name(), concaténale otro mensaje
```js
return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? 
```

j) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
```js
return x + y // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' 
```

k) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
```js
return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"
```


## [PROYECTO TEMA 1](projects/project1.md)