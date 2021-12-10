/* Análise de Números

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre 
quantos valores informados são pares, quantos valores informados são 
ímpares, quantos valores informados são positivos e quantos valores 
informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem 
por linha e não esquecendo o final de linha após cada uma.

*/

var numeros = Array(5);
for(var i = 0 ; i < 5; i++)
{
    numeros[i] = parseInt(gets());
}
var numerospares = numeros.filter(valor => valor % 2 == 0);
var numerosimpares = numeros.filter(valor => valor % 2 != 0);
var numerospos = numeros.filter(valor => valor > 0);
var numerosneg = numeros.filter(valor => valor < 0);
console.log(numerospares.length + " valor(es) par(es)");
console.log(numerosimpares.length + " valor(es) impar(es)");
console.log(numerospos.length + " valor(es) positivo(s)");
console.log(numerosneg.length + " valor(es) negativo(s)");