const baseURL = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch (baseURL)
.then(response => response.json())
.then(json => pokeDisplay(json))
.catch((error) => console.log(error));


function pokeDisplay(ditto){
    console.log(ditto);

    let dittoPic = document.getElementById("dittoPic");
    dittoPic.src = ditto.sprites.front_default;

    let ability = document.getElementById("ability");
    ability.innerText = ditto.abilities[1].ability.name.toUpperCase();

    let name = document.getElementById("name");
    name.innerText = ditto.species.name.toUpperCase();
}