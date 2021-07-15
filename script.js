const baseURL = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch (baseURL)
.then(response => response.json())
.then(json => pokeDisplay(json))
.catch((error) => console.log(error));


function pokeDisplay(ditto){
    console.log(ditto);

    let divvo = document.getElementById("divvo");
    divvo.style.border = "white 5px solid";
    divvo.style.borderRadius = "10px";
    divvo.style.backgroundColor = "blue";
    divvo.style.maxHeight = "97vh";

    let dittoPic = document.createElement("img");
    dittoPic.src = ditto.sprites.front_default;
    dittoPic.style.width = "15vw";
    dittoPic.style.position = "relative";
    dittoPic.style.right = "3vw";
    dittoPic.style.bottom = "3vh";

    let ability = document.createElement("p");
    ability.innerText = ditto.abilities[1].ability.name.toUpperCase();
    ability.style.color = "white";
    ability.style.fontSize = "48px";
    ability.style.position = "relative";
    ability.style.bottom = "25vh";
    ability.style.left = "50vw";
    ability.style.fontFamily = "VT323, monospace";

    let name = document.createElement("p");
    name.innerText = ditto.species.name.toUpperCase();
    name.style.color = "white";
    name.style.fontSize = "48px";
    name.style.position = "relative";
    name.style.bottom = "36vh";
    name.style.left = "15vw";
    name.style.fontFamily = "VT323, monospace";

    let typing = document.createElement("p");
    typing.innerText = (ditto.types[0].type.name.toUpperCase());
    typing.style.color = "white";
    typing.style.fontSize = "36px";
    typing.style.position = "relative";
    typing.style.bottom = "38vh";
    typing.style.left = "15vw";
    typing.style.fontFamily = "VT323, monospace";

    let stats = document.createElement("p");
    stats.innerText = "STATS:";
    stats.style.color = "white";
    stats.style.fontSize = "48px";
    stats.style.position = "relative";
    stats.style.bottom = "36vh";
    stats.style.left = "1vw";
    stats.style.fontFamily = "VT323, monospace";

    let hp = document.createElement("p");
    hp.innerText = (`${ditto.stats[0].stat.name}: ${ditto.stats[0].base_stat}`).toUpperCase();
    hp.style.color = "white";
    hp.style.fontSize = "36px";
    hp.style.position = "relative";
    hp.style.bottom = "38vh";
    hp.style.left = "1vw";
    hp.style.fontFamily = "VT323, monospace";

    let atk = document.createElement("p");
    atk.innerText = (`${ditto.stats[1].stat.name}: ${ditto.stats[1].base_stat}`).toUpperCase();
    atk.style.color = "white";
    atk.style.fontSize = "36px";
    atk.style.position = "relative";
    atk.style.bottom = "38vh";
    atk.style.left = "1vw";
    atk.style.fontFamily = "VT323, monospace";

    let def = document.createElement("p");
    def.innerText = (`${ditto.stats[2].stat.name}: ${ditto.stats[2].base_stat}`).toUpperCase();
    def.style.color = "white";
    def.style.fontSize = "36px";
    def.style.position = "relative";
    def.style.bottom = "38vh";
    def.style.left = "1vw";
    def.style.fontFamily = "VT323, monospace";

    let spa = document.createElement("p");
    spa.innerText = (`${ditto.stats[3].stat.name}: ${ditto.stats[3].base_stat}`).toUpperCase();
    spa.style.color = "white";
    spa.style.fontSize = "36px";
    spa.style.position = "relative";
    spa.style.bottom = "61vh";
    spa.style.left = "20vw";
    spa.style.fontFamily = "VT323, monospace";

    let spdef = document.createElement("p");
    spdef.innerText = (`${ditto.stats[4].stat.name}: ${ditto.stats[4].base_stat}`).toUpperCase();
    spdef.style.color = "white";
    spdef.style.fontSize = "36px";
    spdef.style.position = "relative";
    spdef.style.bottom = "61vh";
    spdef.style.left = "20vw";
    spdef.style.fontFamily = "VT323, monospace";

    let spd = document.createElement("p");
    spd.innerText = (`${ditto.stats[5].stat.name}: ${ditto.stats[5].base_stat}`).toUpperCase();
    spd.style.color = "white";
    spd.style.fontSize = "36px";
    spd.style.position = "relative";
    spd.style.bottom = "61vh";
    spd.style.left = "20vw";
    spd.style.fontFamily = "VT323, monospace";

    let moveset = document.createElement("p");
    moveset.innerText = "MOVESET:";
    moveset.style.color = "white";
    moveset.style.fontSize = "48px";
    moveset.style.position = "relative";
    moveset.style.bottom = "55vh";
    moveset.style.left = "1vw";
    moveset.style.fontFamily = "VT323, monospace";

    let move1 = document.createElement("p");
    move1.innerText = (ditto.moves[0].move.name).toUpperCase();
    move1.style.color = "white";
    move1.style.fontSize = "36px";
    move1.style.position = "relative";
    move1.style.bottom = "58vh";
    move1.style.left = "1vw";
    move1.style.fontFamily = "VT323, monospace";

    let desc = document.createElement("p");
    desc.innerText = "DESCRIPTION:";
    desc.style.color = "white";
    desc.style.fontSize = "48px";
    desc.style.position = "relative";
    desc.style.bottom = "112vh";
    desc.style.left = "50vw";
    desc.style.fontFamily = "VT323, monospace";

    let entry = document.createElement("p");
    entry.innerText = ("Ditto, a Transform Pokémon. \n It is able to rearrange the \n cells of its body and assume any form. \n Its only attack is Transform.");
    entry.style.color = "white";
    entry.style.fontSize = "36px";
    entry.style.position = "relative";
    entry.style.bottom = "114vh";
    entry.style.left = "50vw";
    entry.style.fontFamily = "VT323, monospace";

    divvo.appendChild(dittoPic);
    divvo.appendChild(ability);
    divvo.appendChild(name);
    divvo.appendChild(typing);
    divvo.appendChild(stats);
    divvo.appendChild(hp);
    divvo.appendChild(atk);
    divvo.appendChild(def);
    divvo.appendChild(spa);
    divvo.appendChild(spdef);
    divvo.appendChild(spd);
    divvo.appendChild(moveset);
    divvo.appendChild(move1);
    divvo.appendChild(desc);
    divvo.appendChild(entry);
}
