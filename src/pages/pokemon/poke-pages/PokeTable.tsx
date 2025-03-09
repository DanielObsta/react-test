import 'bootstrap/dist/css/bootstrap.min.css';
import {useListPokemons, usePostPokemon} from "../usePokemonMethods";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {POKEMON_COLUMNS_TABLE} from "../../../models/pokemon.model";
import {Button, Table} from "react-bootstrap";
import {Field, Form, Formik} from "formik";

export const PokeTable = () => {
    const {data} = useListPokemons();
    const postPokemon = usePostPokemon();
    const columns = POKEMON_COLUMNS_TABLE;
    const table = useReactTable({columns, data, getCoreRowModel: getCoreRowModel()});

    return (
        <div>
        <div className="formCliente">
            <h2>Formik</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label htmlFor="name">Nombre: </label>
                    <Field onChange={handleChange} name="name" type="text" value={inputValues.name}/>
                    <label htmlFor="lastName">Apellido: </label>
                    <Field onChange={handleChange} name="age" type="number" value={inputValues.age}/>
                    <label htmlFor="mail">Correo: </label>
                    <Field onChange={handleChange} name="avatar" type="text" value={inputValues.avatar}/>
                    <label htmlFor="phone">Telefono: </label>
                    <Field onChange={handleChange} name="description" type="text" value={inputValues.description}/>
                    <label htmlFor="identification">Indentificacion: </label>
                    <Field onChange={handleChange} name="description" type="text" value={inputValues.description}/>
                    <label htmlFor="userName">Usuario: </label>
                    <Field onChange={handleChange} name="description" type="text" value={inputValues.description}/>
                    <label htmlFor="password">Contraseña: </label>
                    <Field onChange={handleChange} name="description" type="text" value={inputValues.description}/>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </div>

        
       /* */  <div className="formTickets">
            <h2>Formik</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label htmlFor="id_customer">Id Usuario: </label>
                    <Field onChange={handleChange} name="name" type="text" value={inputValues.name}/>
                    <label htmlFor="id_catalog">Id Catalogo: </label>
                    <Field onChange={handleChange} name="age" type="number" value={inputValues.age}/>
                    <label htmlFor="observation">Observacion: </label>
                    <Field onChange={handleChange} name="avatar" type="text" value={inputValues.avatar}/>
                    <label htmlFor="estado">Estado: </label>
                    <Field onChange={handleChange} name="description" type="text" value={inputValues.description}/>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
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
