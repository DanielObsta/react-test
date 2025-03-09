import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

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
        mutationFn: async (values: { id_customer: number; id_catalog: number; observation: string; estado: string }) => {
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