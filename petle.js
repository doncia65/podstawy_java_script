let tablica = [1, 150, 300, 420, 325, 100];

//wyrazenie poczatkowe, warunek, wyrazenie modyfikujace
//for(let i = 0; i < tablica.length; i++){
//    //wpisz "index[iteracje] element to: element"
//    console.log("index["+i+"], a element to: "+ tablica[i]);
//}

//
////forEach
//tablica.forEach(function(element,index){
//    console.log("index[" + index + "],a element to: " + element);
//});
//
////petla while
//let liczba = 10;
//while(liczba >= 1) {
//    console.log(liczba);
//    liczba--;
//}
//
//// do while
//let liczba2 = 10;
//do {
//    console.log(liczba2);
//    liczba2--
//} while (liczba2 < 1);

//var i = 0; 
//while( true ) { 
// 
// /* pętla while wykonywała by się w nieskończoność (ponieważ warunek tej pętli był by  zawsze prawdziwy), gdyby nie znajdująca się wewnątrz instrukcja break (dzięki czemu  pętla będzie wykonywana dopóki wartość zmiennej i nie osiągnie co najmniej wartości 9) */    
//    
//console.log ( "napis [i = " + i + "] " ); 
// if ( i++ >= 9 ) { break }; 
//} 

//for( var i = 1 ;  i <= 20 ;  i++ ) { 
// 
// if ( i % 2 != 0 ) { continue };  /* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji   jeśli jest podzielna przez dwa to wypisz tą iterację */  
//console.log ( i + " " ); 
//} 


//

let jsonObj = { 
"employees": [      
    {"firstName": "John", 
     "lastName": "Doe"},  
    
    {"firstName": "Anna", 
     "lastName": "Smith"},
    
    {"firstName": "Peter", 
     "lastName": "Jones"}    
] 
} 

for(let i = 0; i < jsonObj.length;i++) {
    console.log(jsonObj.employees[i].firstName+ ' '+ jsonObj.employees[i].lastName);
}
