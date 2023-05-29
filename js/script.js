console.log(`JS OK`);

// Chiedere all'utente il numero di chilometri che vuole percorrere e l'eta del passeggero. Applicare uno sconto del 20% se l'eta è inferiore a 18 anni e uno sconto del 40% se l'eta è maggiore di 65 anni e infine calcolare il prezzo del biglietto in base ai km (0.21 € al km). L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.

/*
1. Recuperare elementi dalla pagina
2. Chiedere all'utente il numero di chilometri che vuole percorrere
3. Chiedere all'utente l'eta
4. Calcolare il prezzo del biglietto in base ai chilometri che vuole percorrere l'utente (e lasciare solo 2 decimali)
5. Calcolare lo sconto in base all'eta dell'utente
6. Inserire il risultato nell'elemento
*/

// Operazioni Preliminari

// Recuperare elementi dalla pagina

const UserName = document.getElementById(`name`)
console.log(UserName);

const UserTrip = document.getElementById(`trip-length`)
console.log(UserTrip);

const UserAge = document.getElementById(`Age`)
console.log(UserAge);

const UserNameTycket = document.getElementById(`Username`)
console.log(UserNameTycket);

const UserAgeTycket = document.getElementById(`Userage`)
console.log(UserAgeTycket);



// Buttons 

const button = document.getElementById(`generates`)
console.log(button);

const button2 = document.getElementById(`cancel`)
console.log(button2);

//Resto in ascolto del click sul bottone

button.addEventListener(`click`, function() {

    const name = document.getElementById(`name`)
    console.log(name);


    UserNameTycket.innerText += UserName;
})