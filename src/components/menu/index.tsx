import { useState } from "react";
import { AiFillSecurityScan, AiOutlineSecurityScan } from "react-icons/ai";
import { BsLightbulb, BsLightbulbFill, BsPeople, BsPeopleFill } from "react-icons/bs";
import { MdHelp, MdHelpOutline } from "react-icons/md";
import { RiDashboardFill, RiDashboardLine } from "react-icons/ri";
import { TiLocation, TiLocationOutline } from "react-icons/ti";

import { MenuButton } from "..";
import { Container } from "./styles";

type props = {
	gridArea: string;
}

export function Menu({ gridArea }: props) {

	const [selected, setSelected] = useState(1);


	return (
		<Container gridArea={gridArea}>
			<MenuButton onClick={() => setSelected(1)} selected={selected === 1} Icon={RiDashboardLine} SelectedIcon={RiDashboardFill} />
			<MenuButton onClick={() => setSelected(2)} selected={selected === 2} Icon={BsLightbulb} SelectedIcon={BsLightbulbFill} />
			<MenuButton onClick={() => setSelected(3)} selected={selected === 3} Icon={AiOutlineSecurityScan} SelectedIcon={AiFillSecurityScan} />
			<MenuButton onClick={() => setSelected(4)} selected={selected === 4} Icon={TiLocationOutline} SelectedIcon={TiLocation} />
			<MenuButton onClick={() => setSelected(5)} selected={selected === 5} Icon={BsPeople} SelectedIcon={BsPeopleFill} />
			<MenuButton onClick={() => setSelected(6)} selected={selected === 6} Icon={MdHelpOutline} SelectedIcon={MdHelp} />
		</Container>
	);
}