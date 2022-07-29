import styled from "styled-components";

type props = {
    gridArea: string;
}

export const Container = styled.main<props>`
display: flex;
flex-direction: column;
flex: 1;
`;