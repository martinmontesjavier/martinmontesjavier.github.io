boton.addEventListener('click', generarPokemon)

function generarPokemon (event){
    document.querySelector('#pokemon').innerHTML=`<img id="charizard" width=500 src="imagenes/charizard.jpg" alt="pokemon">`

    document.querySelector('#info').innerHTML=`<div class="info">
    <img width=500 height=350 src="imagenes/charizard2.jpg" alt="charizard2"><p>"Lanza llamas que pueden fundir el acero más frío. Es conocido por ser un Pokémon temible y peligroso" <br> <em>Pokedex</em></p>
    <p>Charizard es mi pokemon favorito porque es de la primera generación, la temporada que yo veia de pokemon y es uno de los tres principales el cual siempre elegia cuando jugaba en la nintendo porque los de fuego son los mejores.<br> <em>Javi</em></p></div>`
}