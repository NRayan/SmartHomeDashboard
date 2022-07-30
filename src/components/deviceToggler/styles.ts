import { lighten } from "polished";
import styled from "styled-components";

type props = {
    gridArea: string;
    color: string;
}

export const Container = styled.div<props>`
    grid-area: ${({ gridArea }) => gridArea};
    background-color: ${({ color }) => color};
    background-image: linear-gradient(to bottom right,${({ color }) => lighten(.15, color)},${({ color }) => color});
    flex: 1;
    justify-content: space-evenly;
    border-radius: 15px;
    padding: 0 1.5rem;
`;

export const Header = styled.div`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    color:${({ theme }) => theme.colors.text};
    font-weight: 400;
`;

export const SwitchContainer = styled.div`
    flex-direction: row;
    align-items: center;
    column-gap: .5rem;
`;