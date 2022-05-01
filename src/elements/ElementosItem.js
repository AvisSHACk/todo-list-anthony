import styled from "styled-components";

const Contenedor = styled.ul`
    margin-top:0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem .8rem;
    font-size: 1.2rem;
    font-family: Arial;
`

const ContenedorButtons = styled.div`
    margin-left:auto;
`

const ButtonDelete = styled.button`
    font-size: 1.6rem;
    color:#b00020;
    background: none;
    border: 0;
    transform: scale(1);
    cursor: pointer;

    &:hover {
        transform:scale(1.1);
    }
`


const ButtonEditar = styled(ButtonDelete)`
    color:green;
`

const ButtonCancelar = styled(ButtonDelete)`
    color:red;
`

const Square = styled.div`
    margin-right: .5rem;
    font-size: 1.6rem;
    color:#6200ee;
    cursor: pointer;
`

const FormularioEditar = styled.form`
    display: flex;
    flex-grow: 1;
`

const InputEditar = styled.input`
    border:0 ;
    border-bottom: 1px solid green;
    width:100%;
    font-size: 1.2rem;
`

const ButtonEditarForm = styled(ButtonDelete)`
    background-color: green;
    color:#fff;
    font-size: 1rem;
    margin-left: 1rem;
`


export { Contenedor, Item, ButtonDelete, Square, ContenedorButtons, ButtonEditar, FormularioEditar, InputEditar, ButtonEditarForm, ButtonCancelar};