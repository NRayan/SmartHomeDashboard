import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { SectionTitle, SectionTitleContainer } from "../../styles";
import { Container, TemperatureIconContainer, TemperatureIconsContainer, Value } from "./styles";

export function Temperature() {
	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle>Temperature</SectionTitle>

				<TemperatureIconsContainer>
					<TemperatureIconContainer>
						<MdOutlineWaterDrop size="3rem" color="blue" />
						<Value>35%</Value>
					</TemperatureIconContainer>

					<TemperatureIconContainer>
						<TbTemperature size="3rem" color="red" />
						<Value>25°</Value>
					</TemperatureIconContainer>

				</TemperatureIconsContainer>
			</SectionTitleContainer>
		</Container>
	);
}