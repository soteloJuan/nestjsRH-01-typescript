export const pokemonIds = [1,2,3,4,5,10];


interface Pokemon {
    id: number;
    name: string;
    age?: number; // Al colocarle el signo de interrogacion le estamos diciendo que ese valor puede que venga o no
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasur'
} 

export const pokemons: Pokemon[] = []; // De esta manera le estamos indicando que va a tener un arreglo de tipo pokemos


