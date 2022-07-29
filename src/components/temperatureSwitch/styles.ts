import { lighten } from "polished";
import styled from "styled-components";

type props =
    {
        selected: boolean
    }

export const Container = styled.button<props>`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 25rem;
    justify-content: space-evenly;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    row-gap: 1.5rem;
    border: ${({ theme }) => theme.defaultBorder};
    background-image: ${({ selected, theme }) => selected ? `linear-gradient(to bottom left,${theme.colors.primary},${lighten(.15, theme.colors.primary)})` : "none"};
`;

export const Header = styled.div`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.p`
    font-size: 1.3rem;
    color:${({ theme }) => theme.colors.text};
    font-weight: 500;
`;