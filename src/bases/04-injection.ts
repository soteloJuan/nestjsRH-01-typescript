import type { Move, PokeapiResponse } from '../iinterfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, type HttpAdapter }  from '../api/pokeApi.adacter';

// IMPORTANTE 
// Esto es lo que vamos a ver muy seguido en nest, la inyeccion de dependencias, no es mas que a una clase,
// anadirle una dependencia, puede ser una clase normal, una clase abstracta o una nterface


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter // No importa que clase sea, con tal de que tenga la clase get osea este estructurado como nuestra interfaces

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // const { data } = await axios.get<PokeapiResponse>('  ');
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter(); // Aqui estamo haciendo una instancia, para poder mandarlo de esta manera tenemos de manera independente todo
const pokeApiFetch = new PokeApiFetchAdapter();


export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios ); // De esta manera


charmander.getMoves();