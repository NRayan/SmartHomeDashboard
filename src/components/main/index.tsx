
import { TemperatureController, Temperatures, Weather } from "..";
import { Container } from "./styles";


type props = {
	gridArea: string;
}

export function Main({ gridArea }: props) {
	return (
		<Container gridArea={gridArea}>
			<Weather />
			<Temperatures />
			<TemperatureController />
		</Container>
	);
}