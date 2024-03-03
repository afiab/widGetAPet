//import JSON data
import PET_DATA from './test.js';

//store data
const PETS_JSON = JSON.parse(PET_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//grab element with id pets-container
const petsContainer = document.getElementById("pets-container");

//function to add all data from pets array to the page
function addPetsToPage(pets){

    //iterate through array
    for(let i=0; i<pets.length;i++){

        const divCard = document.createElement('div');
        divCard.classList.add("pet-card");

        const petOpts = ["Fish", "Cat", "Dog"];
        const type = pets[i].condition;

        divCard.innerHTML = `<h3>ID: ${pets[i].pet_id}</h3>
        <p>In the Shelter since: ${pets[i].listing_date}<p>
        <p>Type: ${petOpts[type]}</p>
        <p>Color: ${pets[i].color_type}<p>
        `

        document.getElementById("pets-container").append(divCard);
    }
}

addPetsToPage(PETS_JSON);

function filterCatsOnly() {
    deleteChildElements(petsContainer);

    const cats = PETS_JSON.filter( (pet) =>
    {return pet.condition == 1});

    addPetsToPage(cats);
} 

function filterDogsOnly() {
    deleteChildElements(petsContainer);

    const dogs = PETS_JSON.filter( (pet) =>
    {return pet.condition == 2});

    addPetsToPage(dogs);
} 

function showAllPets() {
    deleteChildElements(petsContainer);

    addPetsToPage(PETS_JSON);
}

const catBtn = document.getElementById("cats-btn");
const dogBtn = document.getElementById("dogs-btn");
const allBtn = document.getElementById("all-btn");

catBtn.addEventListener("click", filterCatsOnly);
dogBtn.addEventListener("click",filterDogsOnly);
allBtn.addEventListener("click",showAllPets);