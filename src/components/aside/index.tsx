import { Container } from "./styles";
import { Devices } from "../";

type props = {
	gridArea: string;
}

export function Aside({ gridArea }: props) {
	return (
		<Container gridArea={gridArea}>
			<Devices />
		</Container>
	);
}