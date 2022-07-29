import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useTheme } from "styled-components";
import { SmartHomeContext } from "../../contexts";
import { Switch } from "../switch";
import { Button, Celcius, Container, ControllerContainer, Header, Temperature, TemperatureIndicator, TemperatureIndicatorContainer, TemperatureIndicatorStroke, Title } from "./styles";

export function TemperatureController() {

	const { rooms } = useContext(SmartHomeContext);

	const selectedRoom = rooms.find(room => room.selected);

	const { primary, text } = useTheme().colors;

	return (
		<Container>
			{
				selectedRoom &&
				<>
					<Header>
						<Title>{selectedRoom.title} Temperature</Title>
						<Switch on={selectedRoom.on} color={primary} disabled/>
					</Header>

					<ControllerContainer>
						<Button>
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

						<Button>
							<BsPlusLg size="2rem" color={text} />
						</Button>
					</ControllerContainer>
				</>
			}
		</Container>
	);
}