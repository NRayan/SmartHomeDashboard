import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useTheme } from "styled-components";
import { SmartHomeContext } from "../../contexts";
import { SwitchLabel } from "../../styles";
import { Toggle } from "../toggle";
import { Button, Celcius, Container, ControllerContainer, Header, SwitchContainer, Temperature, TemperatureIndicator, TemperatureIndicatorContainer, TemperatureIndicatorStroke, Title } from "./styles";

export function TemperatureController() {

	const { rooms, updateRoom } = useContext(SmartHomeContext);

	const selectedRoom = rooms.find(room => room.selected);

	const { primary, text_Secondary, text } = useTheme().colors;

	function handleSwitchChange() {
		if (selectedRoom === undefined) return;
		updateRoom({ ...selectedRoom, on: !selectedRoom.on });
	}

	function handleUpdateTemperatureClick(increase: boolean) {
		if (selectedRoom === undefined) return;

		if (!selectedRoom.on) {
			alert("Before changing AC temperature, turn it on");
			return;
		}

		if (increase && selectedRoom.temperature === 40) return;
		if (!increase && selectedRoom.temperature === -10) return;
		updateRoom({ ...selectedRoom, temperature: selectedRoom.temperature + (increase ? 1 : -1) });
	}

	return (
		<Container>
			{
				selectedRoom &&
				<>
					<Header>
						<Title>{selectedRoom.title} Temperature</Title>

						<SwitchContainer>
							<SwitchLabel>{selectedRoom.on ? "ON" : "OFF"}</SwitchLabel>
							<Toggle on={selectedRoom.on} onChange={handleSwitchChange} fillColor={primary} disabledFillColor={text_Secondary} dotColor={"white"} />
						</SwitchContainer>
					</Header>

					<ControllerContainer>
						<Button activeColor="blue" onClick={() => handleUpdateTemperatureClick(false)}>
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

						<Button activeColor="red" onClick={() => handleUpdateTemperatureClick(true)}>
							<BsPlusLg size="2rem" color={text} />
						</Button>
					</ControllerContainer>
				</>
			}
		</Container>
	);
}