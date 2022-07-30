import { useContext } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { TemperatureSwitch } from "..";
import { SmartHomeContext } from "../../contexts";
import { SectionTitle, SectionTitleContainer } from "../../styles";
import { Container, TemperatureIconContainer, TemperatureIconsContainer, TemperatureSwitchesContainer, Value } from "./styles";

export function Temperatures() {

	const { rooms } = useContext(SmartHomeContext);

	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle>Temperature</SectionTitle>

				<TemperatureIconsContainer>

					<TemperatureIconContainer>
						<MdOutlineWaterDrop size="2rem" color="#39B6FF" />
						<Value>35%</Value>
					</TemperatureIconContainer>

					<TemperatureIconContainer>
						<TbTemperature size="2rem" color="#F55945" />
						<Value>25°</Value>
					</TemperatureIconContainer>

				</TemperatureIconsContainer>
			</SectionTitleContainer>

			<TemperatureSwitchesContainer>

				{
					rooms.map(room => (
						<TemperatureSwitch room={room} />
					))
				}
			</TemperatureSwitchesContainer>
		</Container>
	);
}