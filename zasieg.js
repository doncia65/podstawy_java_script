'use strict';
let liczba = 10; //zainicjowana zmienna globalna

//tworze funkcje
function zmienWartosc(){
    // zmieniam wartosc zmiennej globalne
    liczba = 20;
    console.log(liczba);
}

zmienWartosc();
console.log(liczba);