import { Title } from "../../styles";
import { MoreButton, DeviceToggler } from "../";
import { Container, TitleContainer, GridDevices } from "./styles";
import {CgSmartHomeRefrigerator} from "react-icons/cg";

export function Devices() {
	return (
		<Container>
			<TitleContainer>
				<Title>My Devices</Title>
				<MoreButton />
			</TitleContainer>

			<GridDevices>
				<DeviceToggler title="Refrigerator" gridArea="1/1/2/2" color="#7A40F2" Icon={CgSmartHomeRefrigerator}/>
				<DeviceToggler title="Routes" gridArea="1/2/2/3" color="#007EF4" Icon={CgSmartHomeRefrigerator}/>
				<DeviceToggler title="Music System" gridArea="2/1/3/2" color="#F9523D" Icon={CgSmartHomeRefrigerator}/>
				<DeviceToggler title="Lamps" gridArea="2/2/3/3" color="#2CAE67" Icon={CgSmartHomeRefrigerator}/>
			</GridDevices>

		</Container>
	);
}