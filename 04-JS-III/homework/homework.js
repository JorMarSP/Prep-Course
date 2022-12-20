// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  data = palabras[0];
  for (let i = 1; i < palabras.length; i++){
    data = data + " " + palabras[i];
  }
  return data;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  result = array.filter(x=> x === elemento);
  if (result.length > 0){
    return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  data = 0;
  for (let i = 0; i < numeros.length; i++){
    data = data + numeros[i];
  }
  return data;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  data = 0;
  cantidad = resultadosTest.length;
  for (let i = 0; i < cantidad; i++){
    data = data + resultadosTest[i];
  }
  return data/cantidad;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor = numeros[0];
  cantidad = numeros.length;
  for (let i = 1; i < cantidad; i++){
    if (mayor < numeros[i]){
      mayor = numeros [i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  cantidad = arguments.length;
  if (cantidad === 0) {
    return 0;
  }
  if (cantidad === 1){
    return arguments[0];
  }
  resultado = 1;
  for (let i = 0; i < cantidad; i++){
    resultado = resultado * arguments[i];
  }
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  resultado = 0;
  for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18) {
    resultado += 1
    }
  }
  return resultado;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia > 1 && numeroDeDia < 6){
    return "Es dia Laboral";
  }
  return "Es fin de semana";   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = n + ' '
  arreglo =  Array.from(n);
  if (arreglo[0] === '9'){
    return true;
  }
  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  newarreglo = arreglo.filter(igual => igual === arreglo[0]);
  if (arreglo.length === newarreglo.length)  {
    return true;
  }
  return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  isenero = array.includes('Enero');
  ismarzo = array.includes('Marzo');
  isnoviembre =array.includes('Noviembre');
  if (isenero === false || ismarzo === false || isnoviembre === false ){
    return "No se encontraron los meses pedidos"
  }
  meses = [];
  for (i=0; i<array.length; i++){
    if (array[i] === 'Enero' ||array[i] ===  'Marzo' || array[i] === 'Noviembre'){
      meses.push(array[i]);
    }
  }
  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newarreglo = array.filter(x => x > 100);
  return newarreglo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  newarreglo = [];
  interrumpio = false;
  i=1;
  while (i < 11) {
    numero = numero + 2;
    if (i === numero) {
      interrumpio = true;
      break;
    }
    newarreglo.push(numero);
    i = i + 1;
  }
  if (interrumpio === true) {
    return "Se interrumpió la ejecución";
  }
  return newarreglo;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  newarreglo = [];
  i=1;
  while (i < 11) {
    if (i === 5) {
      i = i + 1;
      continue;
    }else{
      numero = numero + 2;
      newarreglo.push(numero);
      i = i + 1;
    }
  }
  return newarreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
