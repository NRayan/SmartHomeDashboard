import styled from "styled-components";

export const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 3.5rem;
aspect-ratio: 1.0;
box-shadow: ${({ theme }) => theme.boxShadow};
border-radius: 25%;
border: ${({ theme }) => theme.defaultBorder};
background-color: ${({ theme }) => theme.colors.background_Secondarys};
`;