//'use strict';
////bez 'use strict' niektore bledy sa bardziej dozwolone
//
////komentare w javascript za pomoca ctrl+ / 
////console.log();
////komentarze dzielimy na liniowe i blokowe
///*
//console.log('123');
//*/
//
///*
//komentarz blokowy
//*/
//let liczba = 10;
//let Liczba = 20;
//
////w java script wielkosc liter ma  znaczenie
////duze litery zarezerwowane sA dla nazewnictwa klas
//console.log(liczba)
//console.log(Liczba)
//
////funkcja loguje do konsoli "123"
//function logujDoKonsoli() {
//    console.log('123');
//}
//
//logujDoKonsoli();

//funkcja dodaje do siebie 3 elementy
function dodaj(par1, par2, par3) {
    return par1 + par2 + par3;
}

//return pozwala na zwrócenie wartości - tzn. odda nam wartość którąmożemy dalej wykorzystać

//console.log() loguje tylko do konsoli - nie zwraca wartosci


function odejmij(par1,par2,par3){
    console.log(par1 - par2 - par3);
}
 odejmij((dodaj(1,2,3),40,10));

