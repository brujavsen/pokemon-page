const Poke_URL = "https://pokeapi.co/api/v2/pokemon?limit=30"
const list_poke_cnt = document.getElementById("pokeList");
const descr_poke_cnt = document.getElementById("pokeCnt");

async function pokeFetch() {
    fetch(Poke_URL)
        .then(repuesta => repuesta.json())
        .then(pokeData => {
            var pokeObj = pokeData.results
            console.log(pokeObj);

            let pokemon;
            var htmlContentToAppend = "";

            for (let i = 0; i < pokeObj.length; i++) {
                pokemon = pokeObj[i];

                htmlContentToAppend += `
                <div id="pokeBtn">
                    <button class="btn btn-danger" id="poke${i}">${pokemon.name}</button>
                </div>
                `

            };

            list_poke_cnt.innerHTML = htmlContentToAppend;

            

            for (let i = 0; i < pokeObj.length; i++) {

                document.getElementById(`poke${i}`).addEventListener("click", () => {
                    fetch(pokeObj[i].url)
                        .then(repuesta => repuesta.json())
                        .then(pokeDescr => {
                            console.log(pokeDescr);

                            var htmlContentToAppend2 = "";

                            htmlContentToAppend2 += `
                            <div class="cntDesc border-dark">
                                <table class="table">
                                    <thead class="thead-warning border-dark">
                                        <tr>
                                            <th class="border-dark rounded" scope="col"><img src=${pokeDescr.sprites.front_default}></th>
                                            <th class="border-dark rounded" scope="col"><img src=${pokeDescr.sprites.front_shiny}></th>
                                            <th class="bg-primary text-white" scope="col"><h2>${pokeDescr.name}</h2></th>
                                            <th class="bg-primary text-white" scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-dark bg-warning text-dark">
                                            <th scope="row">Caract.</th>
                                            <td>Weight:${pokeDescr.weight}</td>
                                            <td>Height:${pokeDescr.height}</td>
                                            <td>Id:${pokeDescr.id}</td>
                                        </tr>
                                        <tr class="bg-success text-white">
                                            <th scope="row">Abilities</th>
                                            <td>${pokeDescr.abilities[0].ability.name}</td>
                                            <td>${pokeDescr.abilities[1].ability.name}</td>
                                            <td></td>
                                        </tr>
                                        <tr class="bg-danger text-dark">
                                            <th scope="row">Type</th>
                                            <td>${pokeDescr.types[0].type.name}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                
                            `

                            descr_poke_cnt.innerHTML = htmlContentToAppend2;
                        });

                });

            };

        });
};

pokeFetch();


