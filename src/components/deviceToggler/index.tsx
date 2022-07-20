import { IconType } from "react-icons/lib";
import { Container, Header } from "./styles";


type props = {
	gridArea: string;
	color: string;
	Icon:IconType
}

export function DeviceToggler({ gridArea, color,Icon }: props) {
	return (
		<Container gridArea={gridArea} color={color}>
			<Header>
				<Icon size={24} color="#FFF"/>
			</Header>
		</Container>
	);
}