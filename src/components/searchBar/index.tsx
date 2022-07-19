import React from "react";
import { Container, Input, InputContainer } from "./styles";
import { ImSearch } from "react-icons/im";
import { useTheme } from "styled-components";
import { transparentize } from "polished";

type props = {
    gridArea: string;
}

export function SearchBar({ gridArea }: props) {

	const colors = useTheme().colors;

	return (
		<Container gridArea={gridArea}>
			<InputContainer>
				<ImSearch size={18} color={transparentize(0.2, colors.text)} />
				<Input placeholder="Search" />
			</InputContainer>
		</Container>
	);
}