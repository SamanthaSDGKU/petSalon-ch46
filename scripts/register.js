
let petSalon = {
    name:"The Fashion pet",
    phone:"999-999-9999",
    address:{
        country:"United States",
        city:"San Diego",
        zip:"12345"
    },
    pets:[]
}
let inputName;
let inputAge;
let inputGender;
let inputService;

// creating the constructor
function Pet(name, age, gender,service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
}
function calculateAverage(){
    // 1) sum all the ages
    let total=0;
    for(let i=0;i<petSalon.pets.length;i++){
        total = total + petSalon.pets[i].age;
    }
    document.getElementById("average").innerHTML+=`<p>${total}</p>`;
}
function register(){
    //get the values from the HTML
    //create the object using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value);
    // push the object to the array
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayCards();
        clearForm();
        displayTotalAmountPets();
        displayServiceCount();
    }
}

function isValid(pet){
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    if(!pet.name || !pet.service){
        if(!pet.name) inputName.classList.add("alert-error");
        if(!pet.service) inputService.classList.add("alert-error");
        return false;
    }
    return true;
}
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
}
function init(){

    //hook events

    // initial functions
    
    //creating a new pet
    let pet1 = new Pet("Scooby",60,"Male","Grooming");
    let pet2 = new Pet("Scrappy",50,"Male","Vaccine");
    petSalon.pets.push(pet1,pet2);
    displayCards();
    displayTotalAmountPets();
    displayServiceCount();
    //load the inputs
    inputName = document.getElementById("txtName");
    inputAge=document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputService = document.getElementById("txtService");
    
}

window.onload=init;


