export class Pokemon { 
    public id: number;
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;

        console.log('Constructor llamado');
    }
}

// La siguiente forma es la corta como se suele ver aya afuera 
export class PokemonCorta { 
    constructor(
        public readonly id: number, // Esto signifiica que una vez que le coloquemos el valor ya no lo podremos modificars
        public name: string){}
}




export const charmander = new Pokemon(1, 'charmander');