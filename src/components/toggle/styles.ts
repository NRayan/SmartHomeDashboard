import styled from "styled-components";

const height = "1.8rem";
const width = "3.5rem";

export const Container = styled.button<{ bgColor: string }>`
    display: flex;
    height: ${height};
    width: ${width};
    border-radius: 2rem;
    background-color:${({ bgColor }) => bgColor};
    position: relative;
`;

export const Dot = styled.div<{ on: boolean, bgColor: string, fillColor: string }>`
    position: absolute;
    height: 100%;
    border-radius: 100%;
    aspect-ratio: 1;
    top: 0;
    transition: all linear 100ms 0s;
    background-color:${({ bgColor }) => bgColor};
    left: ${({ on }) => on ? `calc(${width} - ${height})` : "0"};
    border: 2px solid ${({ fillColor }) => fillColor};
`;