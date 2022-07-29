import { useState } from "react";
import { IconType } from "react-icons/lib";
import { Switch } from "../";
import { SwitchLabel } from "../../styles";
import { Container, Header, SwitchContainer, Title } from "./styles";

type props = {
	gridArea: string;
	color: string;
	Icon: IconType;
	title: string;
}

export function DeviceToggler({ gridArea, color, title, Icon }: props) {

	const [on, setOn] = useState(false);

	return (
		<Container gridArea={gridArea} color={color}>
			<Header>
				<Icon size="2.8rem" color="#FFF" />
				<SwitchContainer>
					<SwitchLabel>{on ? "ON" : "OFF"}</SwitchLabel>
					<Switch color={color} on={on} onSwitch={() => setOn(prevstate => !prevstate)} />
				</SwitchContainer>
			</Header>
			<Title>{title}</Title>
		</Container>
	);
}