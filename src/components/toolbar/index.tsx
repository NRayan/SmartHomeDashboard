import { RiSettings2Line, RiNotification2Line } from "react-icons/ri";
import { useTheme } from "styled-components";
import { Avatar, Button, ButtonsContainer, Container, Name } from "./styles";
import AvatarIcon from "../../assets/avatar1.svg";

type props = {
	gridArea: string;
}

export function Toolbar({ gridArea }: props) {

	const { text } = useTheme().colors;

	return (
		<Container gridArea={gridArea}>

			<ButtonsContainer>
				<Button>
					<RiSettings2Line color={text} size={22} />
				</Button>
				<Button>
					<RiNotification2Line color={text} size={22} />
				</Button>
			</ButtonsContainer>
			
			<Avatar src={AvatarIcon} alt="Avatar" />
			<Name>Norton Rayan</Name>
		</Container>
	);
}