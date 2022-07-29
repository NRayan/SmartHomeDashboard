import { useContext } from "react";
import { BiSlideshow } from "react-icons/bi";
import { MdKitchen, MdOutlineBed, MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { TemperatureSwitch } from "..";
import { SmartHomeContext } from "../../contexts";
import { SectionTitle, SectionTitleContainer } from "../../styles";
import { Container, TemperatureIconContainer, TemperatureIconsContainer, TemperatureSwitchesContainer, Value } from "./styles";

export function Temperatures() {

	const { bedroom1T, bedroom2T, livingRoomT, kitchenT, switchTemperatureOn } = useContext(SmartHomeContext);

	function handleSwitch(id:number) {
		switchTemperatureOn(id);
	}

	function handleClick() {
		console.log(1);
	}

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
				<TemperatureSwitch on={kitchenT.on} title="Kitchen" onclick={handleClick} onSwitch={()=>{handleSwitch(1);}} Icon={MdKitchen} />
				<TemperatureSwitch on={bedroom1T.on} title="Bedroom 1" onclick={handleClick} onSwitch={()=>{handleSwitch(2);}} Icon={MdOutlineBed} />
				<TemperatureSwitch on={bedroom2T.on} title="Bedroom 2" onclick={handleClick} onSwitch={()=>{handleSwitch(3);}} Icon={MdOutlineBed} />
				<TemperatureSwitch on={livingRoomT.on} title="Living room" onclick={handleClick} onSwitch={()=>{handleSwitch(4);}} Icon={BiSlideshow} />
			</TemperatureSwitchesContainer>
		</Container>
	);
}