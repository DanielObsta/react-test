import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {Pokemon} from "../../models/pokemon.model";



// useQuery
export const useListPokemons = () => {
    // wait Promise
    const wait = (message: number) => new Promise((resolve) => setTimeout(resolve, message));

    // key Vars
    const keyVar1 = '';
    const keyVar2 = '';

    // Query consult
    const {data, isLoading} = useQuery({
        queryFn: async () => {
            await wait(2000)
            const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
            return data.results as Pokemon[]
        },
        queryKey: ["tokens", {keyVar1, keyVar2}], // para el macronutrient en cache
    });
    console.log(typeof data);
    return {data: data ?? [], isLoading};
}



// useMutation
// crisApi: https://crisapi.free.beeceptor.com
export const usePostPokemon = () => {
    return useMutation({

        mutationFn: (values: Pokemon) => {
            return axios.post('https://cc2024.free.beeceptor.com', values)
        }
    });
}

//Consultar ticket
export const consTicket = () => {
    return useQuery({
        queryKey: ["tickets"], 
        queryFn: async () => {
            const response = await axios.get('http://localhost:8081/distribuida/listar-clientes');
            return response.data;
        },
    });
};

export const crearTicket = () => {
    const queryClient = useQueryClient(); // Para actualizar la caché después de la mutación

    return useMutation({
        mutationFn: async (values: { name: string; lastName: string; mail: string; phone: string 
            ; identification: string; userName: string; password: string }) => {
            const response = await axios.post("http://localhost:8081/customer/crear-usuario", values);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["customer"] });
        },
        onError: (error) => {
            console.error("Error al enviar el Usuario:", error);
        },
    });
};