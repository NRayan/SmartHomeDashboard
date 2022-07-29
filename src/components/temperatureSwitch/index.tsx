import { IconType } from "react-icons/lib";
import { useTheme } from "styled-components";
import { SwitchLabel } from "../../styles";
import { Switch } from "../switch";
import { Container, Header, Title } from "./styles";

type props =
	{
		on: boolean,
		onSwitch: () => void,
		Icon: IconType,
		title: string,
		onclick: () => void
	}

export function TemperatureSwitch({ title, Icon, onSwitch, on, onclick }: props) {

	const { primary } = useTheme().colors;

	return (
		<Container>
			<Header>
				<SwitchLabel>{on ? "ON" : "OFF"}</SwitchLabel>
				<Switch on={on} onSwitch={onSwitch} color={primary} />
			</Header>
			<Icon color="#FFF" size="3rem" />
			<Title>{title}</Title>
		</Container>
	);
}