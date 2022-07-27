import { Container } from "./styles";
import { Devices, Members,Power } from "../";

type props = {
	gridArea: string;
}

export function Aside({ gridArea }: props) {
	return (
		<Container gridArea={gridArea}>
			<Devices />
			<Members />
			<Power />
		</Container>
	);
}