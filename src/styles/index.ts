import { transparentize } from "polished";
import styled from "styled-components";

export const Title = styled.h2`
    font-size: 1.6rem;
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
    font-weight: 300;
`;