'use strict';

let osoba = {
    name: 'Marcin',
    height: 184,
    print: function() {console.log(this.name);}
    
}

//console.log(osoba.name + ' ' + osoba.height);
osoba.print();

//aby dodac nowe pole do obiektu, podajemy nazwe zmiennej pod ktora trzymamy obiekt, kropke i nazwe nowego klucza wraz z przypisana wartoscia. Mozemy przypisywac rozwniez metody
osoba.weight= 60;
osoba.wyswietlaDane = function (){
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}
osoba.wyswietlaDane();

//Klasy
//aby utworzyc klase, uzywamy slowa klucczowego class, podajemy nazwe klasy (z duzej litery), otwieramy nawias klamrowy i definiujemy construktor( ktorry jest potrzebny do utworzenia obiektu z klasy), nastepnie mozemy zdefiniowac metody

class Osoba{
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlDaneOsobowe() {
        console.log(this.imie + ' ' + this.nazwisko);
    }
}

let marcin = new Osoba('Marcin','G');
let krzysztof = new Osoba('Krzysztof', 'M');

marcin.wyswietlDaneOsobowe();
krzysztof.wyswietlDaneOsobowe();

///randomNumber losowanie liczby od 1 do 100

         
let randomowa = Math.floor((Math.random() * 100) +1);
console.log(randomowa);