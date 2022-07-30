import { transparentize } from "polished";
import { useContext } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useTheme } from "styled-components";
import { SmartHomeContext } from "../../contexts";
import { SwitchLabel } from "../../styles";
import { roomType } from "../../types";
import { Container, Header, Title } from "./styles";

type props =
	{
		room: roomType
	}

export function TemperatureSwitch({ room }: props) {

	const { Icon, on, selected, title, id } = room;
	const { changeSelected } = useContext(SmartHomeContext);

	const { primary } = useTheme().colors;

	const toggleColor = selected ? "#FFF" : transparentize(.7, primary);

	function handleClick() {
		!selected && changeSelected(id);
	}

	return (
		<Container selected={selected} onClick={handleClick}>
			<Header>
				<SwitchLabel>{on ? "ON" : "OFF"}</SwitchLabel>
				{
					on ?
						<MdToggleOn size={32} color={toggleColor} />
						:
						<MdToggleOff size={32} color={toggleColor} />
				}
				{/* <Switch on={on} color={primary} /> */}
			</Header>
			<Icon color="#FFF" size="3rem" />
			<Title>{title}</Title>
		</Container>
	);
}