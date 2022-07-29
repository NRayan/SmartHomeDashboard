import styled from "styled-components";

export const Container = styled.div`
flex: 1;
box-shadow: ${({ theme }) => theme.boxShadow};
width: 100%;
padding: 2rem;
border-radius: 15px;
`;