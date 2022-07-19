import { transparentize } from "polished";
import { IconType } from "react-icons/lib";
import { useTheme } from "styled-components";
import { Container, SelectionIndicator } from "./styles";

type props =
	{
		Icon: IconType,
		SelectedIcon: IconType,
		selected?: boolean,
		onClick: () => void
	}

const iconSize = 32;

export function MenuButton({ Icon, SelectedIcon, selected, onClick }: props) {

	const { primary } = useTheme().colors;
	const color = selected ? primary : transparentize(.5, primary);

	return (
		<Container onClick={onClick}>
			{
				selected ?
					<>
						<SelectedIcon size={iconSize} color={color} />
						<SelectionIndicator />
					</>
					:
					<Icon size={iconSize} color={color} />
			}

		</Container>
	);
}