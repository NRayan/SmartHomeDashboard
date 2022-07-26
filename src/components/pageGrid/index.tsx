import { Aside, LetterLabel, Menu, SearchBar, Toolbar, Main } from "../../components";
import { Grid } from "./styles";

export function PageGrid() {
	return (
		<Grid>
			<LetterLabel gridArea="1 / 1 / 2 / 2" />
			<SearchBar gridArea="1 / 2/ 2 / 3" />
			<Toolbar gridArea="1 / 3 / 2 / 4" />
			<Menu gridArea="2 / 1 / 3 / 2" />
			<Main gridArea="2 / 2 / 3 / 3" />
			<Aside gridArea="2 / 3 / 3 / 4" />
		</Grid>
	);
}