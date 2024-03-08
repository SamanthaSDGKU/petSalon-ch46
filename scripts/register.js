let petSalon = {
    name:"The Fashion pet",
    phone:"999-999-9999",
    address:{
        country:"United States",
        city:"San Diego",
        zip:"12345"
    },
    pets:[
        {
            name:"Scooby",
            age:80,
            gender:"Male"
        },
        {
            name:"Scrappy",
            age:70,
            gender:"Male"
        },
        {
            name:"Tweety",
            age:85,
            gender:"Female"	
        },
        {
            name:"Speedy",
            age:82,
            gender:"Male"
        }
    ]
}

function displayPetCount(){
    //hint: length
}
function displayNames(){
    //use a for loop to travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        document.getElementById("petList").innerHTML+=`<li>${petSalon.pets[i].name}</li>`;
    }
}

displayNames();

function calculateAverage(){
    // 1) sum all the ages
    let total=0;
    for(let i=0;i<petSalon.pets.length;i++){
        total = total + petSalon.pets[i].age;
    }
    document.getElementById("average").innerHTML+=`<p>${total}</p>`;
}
calculateAverage();