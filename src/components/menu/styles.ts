import styled from "styled-components";

type props = {
	gridArea: string;
}

export const Container = styled.aside<props>`
background-color: ${({ theme }) => theme.colors.background_Secondarys};
grid-area: ${({ gridArea }) => gridArea};
height: 100%;
display: flex;
flex-direction: column;
align-self: flex-start;
padding-top: 20%;
align-items: center;
border-radius: 0 25px 0 0;
box-shadow: ${({ theme }) => theme.boxShadow};
border: ${({ theme }) => theme.defaultBorder};
`;