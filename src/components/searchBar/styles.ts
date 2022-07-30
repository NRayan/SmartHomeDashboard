import styled from "styled-components";

type props = {
    gridArea: string;
}

export const Container = styled.div<props>`
grid-area: ${({ gridArea }) => gridArea};
flex: 1;
justify-content: center;
`;

export const InputContainer = styled.div`
    flex-direction: row;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 10px 15px;
    border-radius: 10px;
    border: ${({ theme }) => theme.defaultBorder};
    background-color: ${({ theme }) => theme.colors.background_Secondarys};
`;

export const Input = styled.input`
    color: ${({ theme }) => theme.colors.text};
    flex: 1;
    margin-left: 15px;
    background-color: transparent;
    border: none;
  
`;