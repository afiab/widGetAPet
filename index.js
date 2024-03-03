//import JSON data
import PET_DATA from './test.js';
import NAME_DATA from './names.js';

//store data
let PETS_JSON, NAME_JSON;

try {
    PETS_JSON = JSON.parse(PET_DATA);
} catch (error) {
    console.error("Error parsing PET_DATA:", error);
}

try {
    NAME_JSON = JSON.parse(NAME_DATA);
} catch (error) {
    console.error("Error parsing NAME_DATA:", error);
}


// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//grab element with id pets-container
const petsContainer = document.getElementById("pets-container");

//function to add all data from pets array to the page
function addPetsToPage(pets, names){

    //iterate through array
    for(let i=0; i<pets.length;i++){

        const divCard = document.createElement('div');
        divCard.classList.add("pet-card");

        const petOpts = ["Fish", "Cat", "Dog"];
        const type = pets[i].condition;

        divCard.innerHTML = `<h3>${names[i].animal_name}</h3>
        <p>ID: ${pets[i].pet_id}</p>
        <p>Type: ${petOpts[type]}</p>
        <p>Color: ${pets[i].color_type}<p>
        <p>In the Shelter since: ${pets[i].listing_date}<p>
        `

        document.getElementById("pets-container").append(divCard);
    }
}

addPetsToPage(PETS_JSON, NAME_JSON);

function filterCatsOnly() {
    deleteChildElements(petsContainer);

    const cats = PETS_JSON.filter( (pet) =>
    {return pet.condition == 1});

    addPetsToPage(cats, NAME_DATA);
} 

function filterDogsOnly() {
    deleteChildElements(petsContainer);

    const dogs = PETS_JSON.filter( (pet) =>
    {return pet.condition == 2});

    addPetsToPage(dogs, NAME_DATA);
} 

function showAllPets() {
    deleteChildElements(petsContainer);

    addPetsToPage(PETS_JSON, NAME_JSON);
}

const catBtn = document.getElementById("cats-btn");
const dogBtn = document.getElementById("dogs-btn");
const allBtn = document.getElementById("all-btn");

catBtn.addEventListener("click", filterCatsOnly);
dogBtn.addEventListener("click",filterDogsOnly);
allBtn.addEventListener("click",showAllPets);