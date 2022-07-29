import { useContext } from "react";
import { BiSlideshow } from "react-icons/bi";
import { MdKitchen, MdOutlineBed, MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { TemperatureSwitch } from "..";
import { SmartHomeContext } from "../../contexts";
import { SectionTitle, SectionTitleContainer } from "../../styles";
import { Container, TemperatureIconContainer, TemperatureIconsContainer, TemperatureSwitchesContainer, Value } from "./styles";

export function Temperatures() {

	const { rooms} = useContext(SmartHomeContext);

	function handleSwitch(id: number) {
		switchTemperatureOn(id);
	}

	function handleClick(id: number) {
		setSelectedRoom(id);
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

				{
					rooms.map(room=>(
						<TemperatureSwitch room={room}/>
					))
				}


				{/* <TemperatureSwitch id={1} selected={selectedRoom.id===1} on={kitchenT.on} title="Kitchen" onClick={handleClick} onSwitch={handleSwitch} Icon={MdKitchen} />
				<TemperatureSwitch id={2} selected={selectedRoom.id===2} on={bedroom1T.on} title="Bedroom 1" onClick={handleClick} onSwitch={handleSwitch} Icon={MdOutlineBed} />
				<TemperatureSwitch id={3} selected={selectedRoom.id===3} on={bedroom2T.on} title="Bedroom 2" onClick={handleClick} onSwitch={handleSwitch} Icon={MdOutlineBed} />
				<TemperatureSwitch id={4} selected={selectedRoom.id===4} on={livingRoomT.on} title="Living room" onClick={handleClick} onSwitch={handleSwitch} Icon={BiSlideshow} /> */}
			</TemperatureSwitchesContainer>
		</Container>
	);
}