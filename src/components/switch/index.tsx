import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

type props =
	{
		color: string;
		on: boolean;
		onSwitch: () => void
	}

export function Switch({ color, on, onSwitch }: props) {

	return (
		<CheckBoxWrapper>
			<CheckBox color={color} id="checkbox" type="checkbox" defaultChecked={on} onChange={onSwitch} />
			<CheckBoxLabel htmlFor="checkbox" color={color} />
		</CheckBoxWrapper>
	);
}