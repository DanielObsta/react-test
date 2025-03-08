import {useMutation, useQuery} from "@tanstack/react-query";
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