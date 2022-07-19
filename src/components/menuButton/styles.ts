import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: 2.5rem;
`;

export const SelectionIndicator = styled.div`
position: absolute;
top: 0;
left: 0;
width: .3rem;
border-radius: 0 5px 5px 0;
height: 100%;
background-color: ${({ theme }) => theme.colors.primary};
`;