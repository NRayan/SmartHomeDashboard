import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div``;

export const AvatarsContainer = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 3rem;
    border: ${({ theme }) => theme.defaultBorder};
`;

export const AvatarContainer = styled.div`
    align-items: center;
`;

export const Name = styled.label`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    margin-top: .5rem;
`;

export const Role = styled.h3`
    font-size: 1.2rem;
    font-weight: 300;
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
`;



