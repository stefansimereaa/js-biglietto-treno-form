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

const UserName = document.getElementById(`name`);
console.log(UserName);

const UserTrip = document.getElementById(`trip-length`)
console.log(UserTrip);

const UserAge = document.getElementById(`Age`)
console.log(UserAge);

const UserNameTycket = document.getElementById(`Username`)
console.log(UserNameTycket);

const Carriage = document.getElementById(`number-carriage`)
console.log(Carriage);


// Buttons 

const button = document.getElementById(`generates`)
console.log(button);

const button2 = document.getElementById(`cancel`)
console.log(button2);

//Resto in ascolto del click sul bottone
//Button Generates
button.addEventListener(`click`, function() {

    //Row Display
    const ticket = document.getElementById(`ticket`)
    ticket.classList.remove(`d-none`);
    ticket.classList.add(`d-block`, `d-flex`);

    // Nome
    const name = document.getElementById(`name`).value;
    const Nameoutput = document.getElementById(`Username`);
    Nameoutput.textContent = name;

    // Offerta
    const selectElement = document.getElementById(`Age`)
    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    const selectedOutput = document.getElementById(`Userage`);
    selectedOutput.textContent = selectedOption;

    // Prezzo
    const userkm = document.getElementById(`trip-length`)
    const ageselect = document.getElementById(`Age`)
    const ticketPrice = document.getElementById(`price`)
    const km = (userkm.value);
    const age = ageselect.value;

    const tickets = 0.21 * km;
    let sconto = 0;
    if(age === `minorenne`) {
        sconto = tickets * 0.2;
    } else if (age === `anziano`){
        sconto = tickets * 0.4;
    }
    const prezzoFinale = tickets - sconto;
    ticketPrice.textContent = prezzoFinale.toFixed(2);


    // Randomizzo carozza
    const  generateCarriage = document.getElementById(`number-carriage`)
    const min = 1;
    const max = 200;
    const number = Math.floor(Math.random() * (max - min) + min);
    generateCarriage.textContent = number;

    // Randomizzo Cp
    const  generateCp = document.getElementById(`number-cp`)
    const minCp = 1;
    const maxCp = 9999;
    const numberCp = Math.floor(Math.random() * (maxCp - minCp) + minCp);
    generateCp.textContent = numberCp;
})


//Button Delete
button2.addEventListener(`click`, function(){

    //Row Display
    const ticket = document.getElementById(`ticket`)
    ticket.classList.add(`d-none`);

    // Nome
    document.getElementById(`name`).value = "";
    // Offerta
    const selectElement = document.getElementById(`Age`)
    selectElement.selectedIndex = -1;
})