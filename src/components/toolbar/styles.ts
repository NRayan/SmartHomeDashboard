import { transparentize } from "polished";
import styled from "styled-components";

type props = {
    gridArea: string;
}

export const Container = styled.div<props>`
    grid-area: ${({ gridArea }) => gridArea};
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
flex-direction: row;
flex: 1;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 4rem;
width: 4rem;
border-radius: 25%;
box-shadow: ${({ theme }) => theme.boxShadow};
margin-right: 3rem;
border: ${({ theme }) => theme.defaultBorder};
`;

export const Avatar = styled.img`
height: 3.5rem;
aspect-ratio: 1;
object-fit: contain;
`;

export const Name = styled.h2`
    color: ${({ theme }) => transparentize(.1, theme.colors.text)};
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 1.5rem;
`;