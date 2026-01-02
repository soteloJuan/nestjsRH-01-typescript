// El nombre de "adapter" es mas que nada a hacer una referencia a que se esta adaptando un codigo externo
// a nuestro codigo.

import axios from 'axios';


// De esta manera le podemoos decir a nuestras clases de que manera tienen que lucir o de que manera van a lucir
export interface HttpAdapter {

    get<T>(url: string): Promise<T> // Esta es la firma del get

} 


export class PokeApiFetchAdapter implements HttpAdapter{ // De esta manera podemos obligar a la clase que tenga que implementar cierta clase. Por eso es importante el adapter
    async get<T>(url: string): Promise<T>{


        console.log('Este se hizo con Fetch');

        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }
}


export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios; // Esto es solo para tener un mayor control, por si el dia de manana llega a cambiar entonces sea mas facil modificar 


    // <T> Le estamos indicando que la data que va a regresar es de tipo generico
    async get<T>(url: string){
        console.log('Este se hizo con axios')
        const { data } = await this.axios.get<T>(url);

        return data;
    }

    async post(ur: string, data: any){
    }


    async patch(ur: string, data: any){
    }

    async delete(ur: string, data: any){
    }

}

