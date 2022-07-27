import { useState } from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper, Container, Title } from "./styles";

type props =
	{
		color: string;
	}

export function Switch({ color }: props) {

	const [on, setOn] = useState<boolean>(true);

	return (
		<Container>
			<Title>{on ? "ON" : "OFF"}</Title>
			<CheckBoxWrapper>
				<CheckBox color={color} id="checkbox" type="checkbox" defaultChecked={on} onChange={() => setOn(prevstate => !prevstate)} />
				<CheckBoxLabel htmlFor="checkbox" color={color} />
			</CheckBoxWrapper>
		</Container>
	);
}