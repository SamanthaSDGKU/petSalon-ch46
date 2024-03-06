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
    document.getElementById("petList").innerHTML+=`
    <li>${petSalon.pets[0].name}</li>`;
    document.getElementById("petList").innerHTML+=`
    <li>${petSalon.pets[1].name}</li>`;
    document.getElementById("petList").innerHTML+=`
    <li>${petSalon.pets[2].name}</li>`;
    document.getElementById("petList").innerHTML+=`
    <li>${petSalon.pets[3].name}</li>`;
}


displayNames();

function calculateAverage(){
    
}