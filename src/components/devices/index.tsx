import { BsMusicPlayer } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbLamp, TbRouter } from "react-icons/tb";
import { DeviceToggler, MoreButton } from "../";
import { SectionTitle, SectionTitleContainer } from "../../styles";
import { Container, GridDevices } from "./styles";

export function Devices() {
	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle>My Devices</SectionTitle>
				<MoreButton />
			</SectionTitleContainer>

			<GridDevices>
				<DeviceToggler title="Refrigerator" gridArea="1/1/2/2" color="#7A40F2" Icon={CgSmartHomeRefrigerator} />
				<DeviceToggler title="Router" gridArea="1/2/2/3" color="#007EF4" Icon={TbRouter} />
				<DeviceToggler title="Music System" gridArea="2/1/3/2" color="#df3721" Icon={BsMusicPlayer} />
				<DeviceToggler title="Lamps" gridArea="2/2/3/3" color="#1f834c" Icon={TbLamp} />
			</GridDevices>

		</Container>
	);
}