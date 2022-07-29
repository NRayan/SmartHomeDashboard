import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
flex: 1;
box-shadow: ${({ theme }) => theme.boxShadow};
width: 100%;
padding: 2rem;
border-radius: 15px;
border: ${({ theme }) => theme.defaultBorder};
`;

export const Header = styled.div`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-size: 1.4;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
`;

export const ControllerContainer = styled.div`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.button`
    height:7rem;
    aspect-ratio: 1;
    border-radius: 1.8rem;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: ${({ theme }) => theme.defaultBorder};
`;

export const TemperatureIndicatorContainer = styled.div`
   padding: 2rem;
   background-color: ${({ theme }) => darken(0.02, theme.colors.background)};
   border-radius: 100%;
`;

export const TemperatureIndicator = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 20rem;
    padding: 1rem;
    aspect-ratio: 1;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 100%;
`;

export const TemperatureIndicatorStroke = styled.div`
    flex: 1;
    border-radius:100%;
    border: 1px solid ${({ theme }) => theme.colors.text_Secondary};
    justify-content: center;
    align-items: center;
`;

export const Temperature = styled.label`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
`;

export const Celcius = styled.p`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text_Secondary};
    font-weight: 500;
`;