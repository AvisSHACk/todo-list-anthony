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
`

const ButtonDelete = styled.button`
    margin-left:auto;
    font-size: 1.6rem;
    color:#b00020;
    cursor: pointer;
    background: none;
    border: 0;
`

const Square = styled.div`
    margin-right: .5rem;
    font-size: 1.6rem;
    color:#6200ee;
    cursor: pointer;
`

export { Contenedor, Item, ButtonDelete, Square};