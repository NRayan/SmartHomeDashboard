import { IconType } from "react-icons/lib";
import { Switch } from "../";
import { Container, Header, Title } from "./styles";

type props = {
	gridArea: string;
	color: string;
	Icon: IconType;
	title: string;
}

export function DeviceToggler({  gridArea, color, title, Icon }: props) {
	return (
		<Container gridArea={gridArea} color={color}>
			<Header>
				<Icon size="2.8rem" color="#FFF" />
				<Switch color={color} />
			</Header>
			<Title>{title}</Title>
		</Container>
	);
}