import { SectionTitle, SectionTitleContainer } from "../../styles";
import { Chart } from "../chart";
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
				<Chart />
			</PowerContainer>
		</Container>
	);
}