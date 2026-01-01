import axios from 'axios';
import type { Move, PokeapiResponse } from '../iinterfaces/pokeapi-response.interface';

export class Pokemon { 
    public id: number;
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;

        console.log('Constructor llamado');
    }
}

// La siguiente forma es la corta de declarar una clase como se suele ver aya afuera 
export class PokemonCorta { 

    get imageUrl(): string {
        return `https://pokemon.com/${this.name}.jpg` // Cuando el "this" esta dentro de la clase, hace referencia a los parametros(propiedades) o los valores que esta clase maneja
    }

    constructor(
        public readonly id: number, // Esto signifiica que una vez que le coloquemos el valor ya no lo podremos modificars
        public name: string
    ){}



    // Metodos - Importante recordar, que cuando son publicas o privadas, c
    // Publicas - se puede usar afuera de la clase,
    // Private - Que solo se puede usar adentro de la clases

    public scream(){
        console.log(`${this.name.toUpperCase}!!! `);
    }


    public speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{ // Aqui lo que podemos hacer es creear los types, y de esta manera podemos recibir ayuda por parte de typescript
        

        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/Charmander');
        console.log('Response: ', data.moves);
        return data.moves;
    
    }
}


export const charmander = new PokemonCorta(1, 'charmander');

// console.log(charmander.imageUrl)

// charmander.scream();
// charmander.speak();
// console.log(charmander.getMoves());

charmander.getMoves();

