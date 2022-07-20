import styled from "styled-components";

export const Container = styled.section`
flex: 1;
`;

export const TitleContainer = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const GridDevices = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;