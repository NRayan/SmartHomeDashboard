import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import "./styles.css";

const data = [
	{ name: "Jan", percentage: 55 },
	{ name: "Feb", percentage: 50 },
	{ name: "Mar", percentage: 25 },
	{ name: "Apr", percentage: 40 },
	{ name: "May", percentage: 65 },
	{ name: "June", percentage: 75 },
	{ name: "July", percentage: 35 },
	{ name: "Aug", percentage: 85 }
];

export function Chart() {

	const { primary } = useTheme().colors;

	return (
		<Container>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={data}
					margin={{ top: 10, right: 40, left: 0, bottom: 0, }} >
					<XAxis dataKey="name" />
					<YAxis dataKey="percentage" />
					<Tooltip />
					<Area type="basis" dataKey="percentage" stroke={primary} fill={primary} fillOpacity={0.03} />
				</AreaChart>
			</ResponsiveContainer>
		</Container>
	);
}
