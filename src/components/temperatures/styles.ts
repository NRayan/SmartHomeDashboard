import styled from "styled-components";

export const Container = styled.div` `;

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
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;

export const TemperatureSwitchesContainer = styled.div`
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3rem;
`;