import 'bootstrap/dist/css/bootstrap.min.css';
import {useListPokemons, usePostPokemon} from "../usePokemonMethods";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {POKEMON_COLUMNS_TABLE} from "../../../models/pokemon.model";
import {Button, Table} from "react-bootstrap";

export const PokeTable = () => {
    const {data} = useListPokemons();
    const postPokemon = usePostPokemon();
    const columns = POKEMON_COLUMNS_TABLE;
    const table = useReactTable({columns, data, getCoreRowModel: getCoreRowModel()});

    return (
        <div>
            <div>
                <Button variant="primary" onClick={() => {
                    postPokemon.mutate({});
                }} >
                    Envio
                </Button>
            </div>


            <Table striped bordered hover size="sm" variant="light">
                <thead>
                {
                    table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {
                                            flexRender(
                                                header.column.columnDef.header, header.getContext()
                                            )
                                        }</th>
                                ))}
                        </tr>
                    ))
                }
                </thead>
                <tbody>
                {
                    table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {
                                row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {
                                            flexRender(
                                                cell.column.columnDef.cell, cell.getContext()
                                            )
                                        }</td>
                                ))}
                        </tr>
                    ))
                }
                </tbody>
            </Table>

        </div>
    );
}
