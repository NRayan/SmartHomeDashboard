import styled from "styled-components";

export const Container = styled.button<{ bgColor: string }>`
    display: flex;
    height: 1.8rem;
    width: 3.5rem;
    border-radius: 2rem;
    background-color:${({ bgColor }) => bgColor};
    position: relative;
`;

export const Dot = styled.div<{ on: boolean, bgColor: string }>`
    position: absolute;
    height: 100%;
    border-radius: 100%;
    aspect-ratio: 1;
    top: 0;
    left: ${({ on }) => !on ? 0 : "auto"};
    right: ${({ on }) => on ? 0 : "auto"};
    background-color:${({ bgColor }) => bgColor};
`;