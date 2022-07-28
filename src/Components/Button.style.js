import styled from 'styled-components'

export const StyledButton = styled.button`
width:100px;
height: 50px;
background-color: ${(props) => props.backgroundColor};

&:hover{
    & label{
        color: lightcyan;
    }
}
`;

export const ButtonLabel = styled.label`
font-size: 15px;
color: lightpink;


`;