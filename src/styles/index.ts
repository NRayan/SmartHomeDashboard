import { transparentize } from "polished";
import styled from "styled-components";

export const SectionTitleContainer = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.8rem;
`;

export const SectionTitle = styled.h2`
    font-size: 1.6rem;
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
    font-weight: 300;
`;

export const Avatar = styled.img`
height: 3.5rem;
aspect-ratio: 1;
object-fit: contain;
`;