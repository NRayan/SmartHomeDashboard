import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
box-shadow: ${({ theme }) => theme.boxShadow};
border-radius: 15px;
padding: 2rem 3rem;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
`;

export const Subtitle = styled.p`
    font-size: 1.3rem;
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    font-weight: 500;
`;

export const WeatherContainer = styled.div`
    margin-top:1.5rem
`;

export const WeatherHeader = styled.div`
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
`;

export const WeatherTitle = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: 700;
`;

export const WeatherDescription = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
    font-weight: 500;
`;

export const WeatherObservation = styled.p`
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
    font-size: 1.2rem;
    font-weight: 300;
`;
