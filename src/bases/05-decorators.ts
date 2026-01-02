// Un decorador al final es eso, es solo una funcion que regresa algo, usualmente regresan una
// funcion o una modificacion

// target es una funcion
// En resumen un Decorador es siimplemente un representacion de la funcion misma, pero tenemos la opcion
// de anadirle funcioinalidades, extenderla, ajustarla etc.


class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log('Scream from NewPokemon');

    }

    speak(){
        console.log('Speak from NewPokemon')
    }
    
}

const MyDecorator = () => {
    return (target: Function) => {
        // console.log('Target: ', target);
        return NewPokemon;
    }
}


@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}


    scream(){
        console.log(`Scream: ${this.name.toUpperCase()}`);
    }


    speak(){
        console.log(`Speak: ${this.name.toUpperCase()}`);
    }
} 


export const charmander = new Pokemon(4, 'Charmander');