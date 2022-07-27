import styled from "styled-components";

type props = {
    gridArea: string;
}

export const Container = styled.section<props>`
    grid-area: ${({ gridArea }) => gridArea};
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 2rem;
    margin-bottom: 3rem;
`;