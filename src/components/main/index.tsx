import { Weather } from "../weather";
import { Container } from "./styles";


type props = {
	gridArea: string;
}

export function Main({ gridArea }: props) {
	return (
		<Container gridArea={gridArea}>
			<Weather />
		</Container>
	);
}