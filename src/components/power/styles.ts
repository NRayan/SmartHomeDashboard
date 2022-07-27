import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const PowerContainer = styled.div`
    flex: 1;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius:15px;
`;