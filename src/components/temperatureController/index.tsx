import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useTheme } from "styled-components";
import { SmartHomeContext } from "../../contexts";
import { Switch } from "../switch";
import { Button, Celcius, Container, ControllerContainer, Header, Temperature, TemperatureIndicator, TemperatureIndicatorContainer, TemperatureIndicatorStroke, Title } from "./styles";

export function TemperatureController() {

	const { rooms, updateRoom } = useContext(SmartHomeContext);

	const selectedRoom = rooms.find(room => room.selected);

	const { primary, text } = useTheme().colors;

	function handleSwitchChange() {
		if (selectedRoom === undefined) return;
		updateRoom({ ...selectedRoom, on: !selectedRoom.on });
	}

	function handleUpdateTemperatureClick(increase: boolean) {
		if (selectedRoom === undefined) return;
		updateRoom({ ...selectedRoom, temperature: selectedRoom.temperature + (increase ? 1 : -1) });
	}

	return (
		<Container>
			{
				selectedRoom &&
				<>
					<Header>
						<Title>{selectedRoom.title} Temperature</Title>
						<Switch on={selectedRoom.on} color={primary} onSwitch={handleSwitchChange} />
					</Header>

					<ControllerContainer>
						<Button onClick={() => handleUpdateTemperatureClick(false)}>
							<FaMinus size="2rem" color={text} />
						</Button>

						<TemperatureIndicatorContainer>
							<TemperatureIndicator>
								<TemperatureIndicatorStroke>
									<Temperature>{selectedRoom.temperature}° C</Temperature>
									<Celcius>Celcius</Celcius>
								</TemperatureIndicatorStroke>
							</TemperatureIndicator>
						</TemperatureIndicatorContainer>

						<Button onClick={() => handleUpdateTemperatureClick(true)}>
							<BsPlusLg size="2rem" color={text} />
						</Button>
					</ControllerContainer>
				</>
			}
		</Container>
	);
}