import React from "react";
import { SectionTitle, SectionTitleContainer } from "../../styles";
import { MoreButton } from "../moreButton";
import { Container, PowerContainer } from "./styles";

export function Power() {
	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle>Power Consumed</SectionTitle>
				<MoreButton />
			</SectionTitleContainer>
			<PowerContainer>

			</PowerContainer>
		</Container>
	);
}