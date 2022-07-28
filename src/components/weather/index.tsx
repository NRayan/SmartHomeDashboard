import { TiWeatherPartlySunny } from "react-icons/ti";
import { useTheme } from "styled-components";
import { Container, Subtitle, Title, WeatherContainer, WeatherDescription, WeatherHeader, WeatherObservation, WeatherTitle } from "./styles";
import * as AnimationData from "../../assets/weaterAnimation.json";
import Lottie from "react-lottie";

const lottieOptions = {
	loop: true,
	autoplay: true,
	animationData: AnimationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice"
	}
};

export function Weather() {

	const { text } = useTheme().colors;

	return (
		<Container>
			<Title>Hi Norton!</Title>
			<Subtitle>Welcome Home! The air quality is good {"&"} Fresh you<br />can go out today</Subtitle>
			<WeatherContainer>
				<WeatherHeader>
					<WeatherTitle>{"+25° C"}</WeatherTitle>
					<TiWeatherPartlySunny color={text} size="2.5rem" />
				</WeatherHeader>
				<WeatherDescription>Outdoor Weather</WeatherDescription>
				<WeatherObservation>Fuzzy cloudy weather</WeatherObservation>
			</WeatherContainer>

			<Lottie options={lottieOptions}
				height={400}
				width={400} 
				isPaused={false}
				isStopped={false}/>
		</Container>
	);
}