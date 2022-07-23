import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

type props =
	{
		color: string;
	}

export function Switch({ color }: props) {
	return (
		<CheckBoxWrapper>
			<CheckBox color={color} id="checkbox" type="checkbox" />
			<CheckBoxLabel htmlFor="checkbox" />
		</CheckBoxWrapper>
	);
}

{/* <div class="switch__container">
  <input id="switch-shadow" class="switch switch--shadow" type="checkbox">
  <label for="switch-shadow"></label>
</div> */}