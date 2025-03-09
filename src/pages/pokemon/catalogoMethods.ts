import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

//Consultar catalogo
export const consTicket = () => {
    return useQuery({
        queryKey: ["catalogo"], 
        queryFn: async () => {
            const response = await axios.get('http://localhost:8081/distribuida/listar-clientes');
            return response.data;
        },
    });
};