let text;
let list;
let card;

function displayNames(){
    list= document.getElementById("petList");
    text="";//clear the variable
    //use a for loop to travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        text+=`<li>${petSalon.pets[i].name}</li>`;
        console.log("iteration"+ i +" "+ text);
    }
    list.innerHTML=text;
}

function displayCards(){
    const petsDiv = document.getElementById("pets");
    card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.service}</p>
        </div>
        `;
    }
    petsDiv.innerHTML=card;
}

function displayRows(){
    
}

function displayTotalAmountPets(){
    document.getElementById("totalPets").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    //declare variables
    let grooming=0;
    let vaccines =0;
    let hotel=0;

    for(let i=0;i<petSalon.pets.length;i++){
        //travel the array
        let pet = petSalon.pets[i]; // getting the current pet
        if(pet.service.toLowerCase() == "grooming"){
            grooming++; // increase the grooming count
            document.getElementById("totalGroomings").innerHTML=grooming; // display the tolta grooming on HTML
        }else if(pet.service.toLowerCase() == "vaccine"){
            //vaccines 
            vaccines++;
            document.getElementById("totalVaccines").innerHTML=vaccines;
        }else{
            //hotel
            hotel++;
            document.getElementById("totalHotels").innerHTML=hotel;
        }
    }
}