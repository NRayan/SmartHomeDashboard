import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

type props =
	{
		color: string;
		on: boolean;
		onSwitch?: () => void;
		disabled?: boolean
	}

export function Switch({ color, on, onSwitch, disabled = false }: props) {

	return (
		<CheckBoxWrapper>
			<CheckBox disabled={disabled} color={color} id="checkbox" type="checkbox" defaultChecked={on} onChange={onSwitch} />
			<CheckBoxLabel htmlFor="checkbox" color={color} />
		</CheckBoxWrapper>
	);
}