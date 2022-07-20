import styled from "styled-components";

type props = {
    gridArea: string;
}

export const Container = styled.section<props>`
    grid-area: ${({ gridArea }) => gridArea};
    flex: 1;
    justify-content: center;
    align-items: center;
`;