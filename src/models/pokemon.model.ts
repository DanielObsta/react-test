import {ColumnDef} from "@tanstack/react-table";

export interface Pokemon {
    name?: string;
    url?: string;
}

export const POKEMON_INITIAL_STATE: Pokemon = {
    name: "",
    url: ""
}


export const POKEMON_COLUMNS_TABLE: ColumnDef<Pokemon>[] = [
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'URL',
        accessorKey: 'url',
    },
];