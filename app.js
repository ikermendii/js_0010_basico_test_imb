export function mayorDeTresNumeros(a, b, c) {
  let M = 0;
  if (a > b & a > c){
    M = a;
  } else if (b > a & b > c){
    M = b;
  } else {
    M = c;
  }
return M;
}
export function ceroIfNull(a) {
    if ( a == null){
        return 0;
    }
    return a;
}

export function numerosParesCount(desde, hasta) {
    let c = 0;
    for(let i = desde; i <= hasta; i++){
        if(i%2 == 0){
            c++;
        }
    }
    return c; 
}

export function ifCadenaMasLargaDeN(cadena, n) {
    let c = 0;
    for(let i = 0; i < cadena.length; i++){
        c++;
    }
    if (c > n){
       return true; 
    }
    return false;
}
export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
    let s = 0;
    s = a + b + c;
    if(s == n){
        return true;
    }
    return false;
}
// que devuelva en centimos redondeado
// el producto de cantidad por precio
export function importe(cantidad, precio) {
    const p = cantidad * precio;
    return Math.round(p*100);  
}