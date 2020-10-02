let nombreUsuario = document.getElementById('nameUser');
let comentar = document.getElementById('commUser');
let newComment = document.getElementById('newCommentary');

function newCommentUser(){

    //Datos que se van a ingresar
    function dataUser(nombre, comentario){
        this.nombre=nombre;
        this.comentario=comentario;
    }

    var name = nombreUsuario.value;
    var comment = comentar.value;

    //Se agregan los datos del ususario y crea un nuevo comentario
    nuevoComentary = new dataUser(name,comment);
    console.log(nuevoComentary);
    showNewComment();
}

    //Se guarda nuevos comentarios en array
    var nuevosComentarios = [];

    //Muestra los comentarios en pantalla
function showNewComment(){
    nuevosComentarios.push(nuevoComentary);
    newComment.innerHTML += `
        <div class="userName">
            <h3>`+ nuevoComentary.nombre +`</h3>        
        </div>
        <div class="userComment">
            <p>`+ nuevoComentary.comentario +`</p>
        </div><hr/>
    `
}


//Mostrar pokemones en pantalla
    const poke_contenedor = document.getElementById('poke-content');
    const pokemons_number = 26;

    //Colores para tipo de Pokémon
    const typeColor = {
        grass: '#DEFDE0',
        fire: '#FDDFDF',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: 'd5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0O4',
        normal: '#F5F5F5'
    };

    const color_types_main = Object.keys(typeColor);

    const fetchPoke = async () => {
        for(let i=1; i <= pokemons_number; i++) {
            await getPoke(i);
        }
    }

    const getPoke = async id => {
    const poke_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    var response = await fetch(poke_url);
    var pokemon = await response.json();
    createPokeCard(pokemon);
    } 

    fetchPoke();

    function createPokeCard(pokemon) {
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon');

        var namesPoke = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        var typePoke = pokemon.types.map(typePoke => typePoke.type.name);
        var typeMainCol = color_types_main.find(typeCol => typePoke.indexOf(typeCol) > -1);
        var colorPokeType = typeColor[typePoke];

        pokemonElement.style.backgroundColor = colorPokeType;

        let pokeInnerHTML = `
            <div class='img-poke'>
                <a href="./pokemon.html"><img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"></a>
            </div>

            <div class="info"> 
                <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
                <h3 class="name">${namesPoke}</h3>
                <small class="type">Type: <span>${typePoke}</span></small>
            </div>
            
        
        `;

        pokemonElement.innerHTML = pokeInnerHTML;

        poke_contenedor.appendChild(pokemonElement);


//Buscador de pokémones

        // const search_bar = document.getElementById('searchPoke');
        // const button_search = document.getElementById('btn-search');
        
        // let filtrado = ()=>{
                
        //     pokemonElement.innerHTML = '';
        
        //     var texto = search_bar.value.toLowerCase();
        
        //     for(let pokemones of pokemon){
        //         let nombre = pokemones.namesPoke.toLowerCase();
        //         if(nombre.indexOf(texto) !== -1){
        //             pokemonElement.innerHTML += `
        //             <div class='img-poke'>
        //                 <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        //             </div>
        
        //             <div class="info"> 
        //                 <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        //                 <h3 class="name">${namesPoke}</h3>
        //                 <small class="type">Type: <span>${typePoke}</span></small>
        //             </div>
        //         `
        //         }
        //     }
        
        //     if(pokemonElement.innerHTML === ''){
        //         pokemonElement.innerHTML += `<p>No se encontró el pokémon</p>`
        //     }
        // }
        
        // button_search.addEventListener('click', filtrado)
        // search_bar.addEventListener('keyup', filtrado)

    };

    
    
    
