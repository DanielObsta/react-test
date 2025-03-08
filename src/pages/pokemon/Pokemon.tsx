import {PokeTable} from "./poke-pages/PokeTable";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Pokemon = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <PokeTable/>
        </QueryClientProvider>
    );
}