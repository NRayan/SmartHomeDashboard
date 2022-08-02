import { Container, Dot } from "./styles";

type props =
	{
		on: boolean,
		onChange: () => void,
		fillColor: string
		dotColor: string,
		disabledFillColor?: string,
	}

export function Toggle({ on, onChange, fillColor, disabledFillColor, dotColor }: props) {

	const fillBgColor = on ? fillColor : disabledFillColor ? disabledFillColor : fillColor;

	return (
		<Container onClick={onChange} bgColor={fillBgColor} >
			<Dot on={on} fillColor={fillBgColor} bgColor={dotColor} />
		</Container>
	);
}