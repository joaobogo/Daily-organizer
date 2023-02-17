import styled from "styled-components";

const Styledboard = styled.div `
width:80%;

span{
    padding: 10px
}

.image{
    max-width: 20px;
    border-radius: 50%;
}

.highlight{
    background-color: #0ff5;
   
}

.stagecontainer{
background-color: #eee
}

.red{
    background-color:red;
}

.yellow{
    background-color:yellow;
}

.green{
    background-color:green;
}

.stages{
    display:flex;
    justify-content:space-evenly;
}

`

export default Styledboard