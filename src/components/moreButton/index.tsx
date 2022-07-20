import { Container } from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { useTheme } from "styled-components";
export function MoreButton() {

	const { text } = useTheme().colors;

	return (
		<Container>
			<IoIosArrowForward size="2rem" color={text} />
		</Container>
	);
}