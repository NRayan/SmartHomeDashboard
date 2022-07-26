import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

type props =
	{
		color: string;
	}

export function Switch({ color }: props) {
	return (
		<CheckBoxWrapper>
			<CheckBox color={color} id="checkbox" type="checkbox" />
			<CheckBoxLabel htmlFor="checkbox" color={color} />
		</CheckBoxWrapper>
	);
}