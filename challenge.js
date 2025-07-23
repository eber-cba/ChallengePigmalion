/* 
1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
importante es realizar el desarrollo en el menor tiempo posible.


    Busco atraves de dos for todos los pares de numeros y hago la suma de los dos numeros y si la suma es igual al requeridSum retorno true

    En el primero for me posiciono en un numero del array
    Con el segundo for comparo ese numero con los siguientes
    Sumo los dos numeros y si la suma es igual al resultado del numero requerido (requeridSum), retorno true
    
*/

function suma(nums, requeridSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === requeridSum) {
        return true;
      }
    }
  }
}

/* 
2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante

    Para aplicar esta solucion mas eficiente lo pense en como puedo recorrer el array solo una vez para ahorrar tiempo y recursos
    creo un array donde guardo los numeros que ya vi
    recorro el array con un for  y me paro en el numero actual
    pienso cuanto necesito para llegar al numero requerido entonces resto el numero requerido menos el numero actual
    luego me fijo si ese numero que necesito ya aparecido antes en el array vacio que cree al principio
    si ya existe entonces tengo el par de numeros que suman el requerido y retorno true
    si no, lo agrego al array de numeros vistos para poder usarlo en la siguiente iteración
     y si no encuentro el par de numeros que sumen el requerido retorno false al final del recorrido del array


*/
function sumaDos(nums, requeridSum) {
  const vistos = [];

  for (let i = 0; i < nums.length; i++) {
    const actual = nums[i];
    const necesito = requeridSum - actual;

    if (vistos.includes(necesito)) {
      return true;
    }

    vistos.push(actual);
  }

  return false;
}
