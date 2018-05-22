//operatory artymetyczne
//% - modulo,zwraca reszte z dzielenia
console.log(3%2);

let zmienna = 3;

//console.log(zmienna++); //wyrzuci 3
console.log(++zmienna);
//wyrzuci 4

//operatory porownania
if(2 == '2'){
//    w przypadku == sprawdzamy ,czy dane z lewej i prawej sa sobie rowne (niezaleznie od typu)
    console.log('2 =="2"');
}

//w przypadku === sprawdzamy, czy dane z lewej i prawej sa sobie rowne i czy sa tego samego typu
if(2==='2') {
    //console.log sie nie wykona
    console.log('2 ==="2"')
}

//operatory logiczne 
// && -ANd - oba argumenty musza byc prawdziwe

if(2=='2' && 3 =='3'){
    console.log("2 == '2 && 3 == '3'");
    }
// ||- LUB - przynajmniej jeden musi byc prawdziwy shift +\
if("2=='2' || 3 ==='3'"){
    console.log("2 == '2' || 3 === '3'");
    }

let booleanowska = false;
if(!booleanowska){
    console.log('Zaprzeczenie dla booleanowska = false;');
}

//operatory warunkowe
//warunek ? wartosc_jezeli_prawda: wartosc_jezeli_falsz

let liczba = 100
let wynik = (liczba < 0)? 'prawda': 'falsz;'
console.log(wynik); 


//if else 
if(2==='2'){
   console.log("2 === '2'");}
else if (3>=1 && 3<=5) {
    console.log('3 miesci sie w predziale 1-5');
} else {
     console.log("2 !== '2'");
}

//switch sprawdza \
let kolor = 'czerwony';
switch(kolor){
    case 'czerwony':
        console.log('podales kolor czerwony');
        break;
    case 'niebieski':
        console.log('podales kolor niebieski');
        break;
    case 'zielony':
        console.log('podales kolor czerwony');
        break;
    default:
        console.log('jestes daltonista');
}


   