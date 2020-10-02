const poke_container = document.getElementById('container-poke');
const pokemons_number = 20;

const fetchPoke = async () => {
    for(let i=1; i <= pokemons_number; i++) {
        await getPoke(i);
    }
}

const getPoke = async id => {
    const poke_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    var response = await fetch(poke_url);
    var pokemon = await response.json();
    pokeInfo(pokemon);
} 

fetchPoke();

function pokeInfo(pokemon){
    const pokeInfoElement = document.createElement('div');
    pokeInfoElement.classList.add('poke');

    var namesPoke = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    let pokeInfoInnerHTML = `
    
        <div class="pokedex-img">
            <img src="https://www.pngitem.com/pimgs/m/222-2227129_pokemon-pokedex-hd-png-download.png">
        </div>
        <div class="poke-img">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        </div>
        <div>
            <p>${namesPoke}</p>
        </div>
    
    `

    pokeInfoElement.innerHTML = pokeInfoInnerHTML;

    poke_container.appendChild(pokeInfoElement);
};

