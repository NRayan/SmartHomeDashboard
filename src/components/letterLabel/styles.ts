import styled from "styled-components";

type props = {
    gridArea: string;
}

export const Container = styled.div<props>`
    grid-area: ${({ gridArea }) => gridArea};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LetterContainer = styled.div`
    height: 5rem;
    width: 5rem;   
    border-radius: 50%; 
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
`;

export const Letter = styled.h2`    
    font-size: 2.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
`;
