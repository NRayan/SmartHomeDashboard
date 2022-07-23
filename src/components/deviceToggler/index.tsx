import { IconType } from "react-icons/lib";
import { Container, Header } from "./styles";
import { Switch } from "../";

type props = {
	gridArea: string;
	color: string;
	Icon: IconType
}

export function DeviceToggler({ gridArea, color, Icon }: props) {
	return (
		<Container gridArea={gridArea} color={color}>
			<Header>
				<Icon size={24} color="#FFF" />
				<Switch color={color} />
			</Header>
		</Container>
	);
}