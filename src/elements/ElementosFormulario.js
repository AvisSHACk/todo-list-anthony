import styled from "styled-components";

const Formulario = styled.form`
    
    background-color: #6200ee;
    padding:8rem 0 2rem 0;
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
`

export {Formulario, Input, Button};