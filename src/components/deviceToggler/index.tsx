import { useState } from "react";
import { IconType } from "react-icons/lib";
import { SwitchLabel } from "../../styles";
import { Toggle } from "../toggle";
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
					<Toggle on={on} onChange={()=>setOn(!on)} fillColor="white" dotColor={color} disabledFillColor={"rgba(255,255,255,.6)"} />
				</SwitchContainer>
			</Header>
			<Title>{title}</Title>
		</Container>
	);
}