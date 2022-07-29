import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    justify-content: space-evenly;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    row-gap: .5rem;
`;

export const Header = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.p`
    font-size: 1.3rem;
    color:${({ theme }) => theme.colors.text};
    font-weight: 500;
`;