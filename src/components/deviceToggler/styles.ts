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
    border-radius: 15px;
`;

export const Header = styled.div`
    flex-direction: row;
    justify-content: space-between;
`;