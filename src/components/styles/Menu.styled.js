import styled from "styled-components";

export const StyledMenu = styled.div `
background-color: #ccc;
width:20%;
height:100vh;
display:flex;
flex-direction:column;

.column {
    display:flex;
    flex-direction:column;
}

button{
    border: none;
    background-color: transparent;
}

button:hover{
    background-color: white;
}
`