import styled from "styled-components";

export const Container = styled.div`
flex: 1;
`;

export const TemperatureIconsContainer = styled.div`
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
`;

export const TemperatureIconContainer = styled.div`
    flex-direction: row;
    column-gap: .1rem;
    align-items: center;
`;

export const Value = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;