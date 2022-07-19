import { Container, Letter, LetterContainer } from "./styles";

type props = {
	gridArea: string;
}

export function LetterLabel({ gridArea }: props) {
	return (
		<Container gridArea={gridArea}>
			<LetterContainer>
				<Letter>N</Letter>
			</LetterContainer>
		</Container>
	);
}