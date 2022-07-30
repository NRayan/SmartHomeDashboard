import { transparentize } from "polished";
import styled from "styled-components";

type props =
    {
        backgroundPath: string;
    }

export const Container = styled.div<props>`
position: relative;
width: 100%;
background-color: ${({ theme }) => theme.colors.background_Secondarys};
box-shadow: ${({ theme }) => theme.boxShadow};
border-radius: 15px;
padding: 2rem 3rem;
background-image: ${({ backgroundPath }) => `url(${backgroundPath})`};
background-position: right;
background-repeat: no-repeat;
background-size: contain;
border: ${({ theme }) => theme.defaultBorder};
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
`;

export const Subtitle = styled.p`
    font-size: 1.3rem;
    width: 50%;;
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

export const LeafAnimation = styled.div`
    position: absolute;
    right: 1rem;
    top: 0;
    height: 100%;
`;

export const WeatherAnimation = styled.div`
    position: absolute;
    right: 10rem;
    top: 0;
    height: 100%;
`;

export const WeatherImage = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: auto;
`;

