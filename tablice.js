'use strict'
//tablice indeksujemy od 0
let tablica = ['Agata', 'Michal', 'Andrzej'];

//zeby odwolac sie do konkretnego elementu tablicy uzywamy nazwa_tablicy[numer_indeksu]
console.log(tablica[1]);

//jezeli chcemy doda wartosc do tablicy, mozemy zrobic to na kilka sposobow:
//1) nazwa_tablicy[numer_indeksu] = [przypisana_wartosc]
tablica[3] = 'Stefan';

//2) poprzez uzycie metody .push()-dodajemy elemnt na koncu
tablica.push('Monika');
console.log(tablica);

//3)aby dodac element na poczatek tablicy uzywamy metode .unshift()
tablica.unshift('imie');
console.log(tablica);


//aby usunac ostatni element z tablicy, wykonujemy metode .pop()
tablica.pop();
console.log(tablica);

//aby usunac pierwszy element z tablicy, wykonujemy metode .shift() -bezparametrowa
tablica.shift();
console.log(tablica);

//aby zobaczyc dlugosc tablicy, uzywamy metody length
console.log(tablica.length);

//aby wypisac wszystkie elementy tablicy w jednym ciągu uzywamy metody .join() - mozemy podac "lacznik"
console.log(tablica.join('-'));

//odwracanie tablicy za pomoca metody .reverse()
console.log(tablica.reverse());
console.log(tablica);

//aby posortowactablice uzywamy metody .sort()
console.log(tablica.sort());
console.log(tablica);


