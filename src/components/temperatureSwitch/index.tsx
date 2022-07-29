import { useContext } from "react";
import { useTheme } from "styled-components";
import { SmartHomeContext } from "../../contexts";
import { SwitchLabel } from "../../styles";
import { roomType } from "../../types";
import { Switch } from "../switch";
import { Container, Header, Title } from "./styles";

type props =
	{
		room: roomType
	}

export function TemperatureSwitch({ room }: props) {

	const { Icon, on, selected, title, id } = room;
	const { changeSelected } = useContext(SmartHomeContext);

	const { primary } = useTheme().colors;

	function handleClick() {
		!selected && changeSelected(id);
	}

	return (
		<Container selected={selected} onClick={handleClick}>
			<Header>
				<SwitchLabel>{on ? "ON" : "OFF"}</SwitchLabel>
				<Switch on={on} onSwitch={() => null} color={primary} />
			</Header>
			<Icon color="#FFF" size="3rem" />
			<Title>{title}</Title>
		</Container>
	);
}