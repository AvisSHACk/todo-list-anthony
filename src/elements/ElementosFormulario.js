import styled from "styled-components";

const Formulario = styled.form`
    
    background-color: #6200ee;
    padding:0 0 2rem 0;
`

const Input = styled.input`
    width: 100%;
    padding:1rem;
    border:none;
    outline:0;
    border: 0;
    border-bottom: 1px solid #fff;
    color: #fff;
    background-color: transparent;
    font-size:1.2rem;

    &::placeholder {
        color:#ccc;
    }
`

const Button = styled.button`
    font-size:2rem;
    background: none;
    border:none;
    color:#f06292;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) scale(1);
    cursor: pointer;

    &:hover {
        transform: translateY(-50%) scale(1.1);
    }
`

const Header = styled.h1`
    padding:4rem 0;
    background-color: #6200ee;
    text-align: center;
    margin:0;
    color:#fff;
    font-size: 2.5rem;
    font-family: Arial;
`

export {Formulario, Input, Button, Header};