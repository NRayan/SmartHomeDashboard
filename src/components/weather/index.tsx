import { TiWeatherPartlySunny } from "react-icons/ti";
import Lottie from "react-lottie";
import { useTheme } from "styled-components";
import LeafsAnimationData from "../../assets/animationLeafs.json";
import weatherSvg from "../../assets/weather.svg";
import { Container, LeafAnimation, Subtitle, Title, WeatherContainer, WeatherDescription, WeatherHeader, WeatherObservation, WeatherTitle } from "./styles";

const LottieLeafOptions = {
	loop: true,
	autoplay: true,
	animationData: LeafsAnimationData,
	rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
};

export function Weather() {

	const { text } = useTheme().colors;

	return (
		<Container backgroundPath={weatherSvg}>
			<Title>Hi Norton!</Title>
			<Subtitle>Welcome Home! The air quality is good {"&"} Fresh you can go out today</Subtitle>
			<WeatherContainer>
				<WeatherHeader>
					<WeatherTitle>{"+25° C"}</WeatherTitle>
					<TiWeatherPartlySunny color={text} size="2.5rem" />
				</WeatherHeader>
				<WeatherDescription>Outdoor Weather</WeatherDescription>
				<WeatherObservation>Fuzzy cloudy weather</WeatherObservation>
			</WeatherContainer>

			<LeafAnimation>
				<Lottie options={LottieLeafOptions}
					height={"100%"}
					width={"100%"}
					speed={1} />
			</LeafAnimation>

		</Container>
	);
}