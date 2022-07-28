import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Container } from "./styles";
import "./styles.css";

const data = [
	{ name: "Jan", percentage: 70 },
	{ name: "Feb", percentage: 50 },
	{ name: "Mar", percentage: 25 },
	{ name: "Apr", percentage: 40 },
	{ name: "May", percentage: 65 },
	{ name: "June", percentage: 80 },
	{ name: "July", percentage: 60 },
	{ name: "Aug", percentage: 85 }
];

export function Chart() {

	return (
		<Container>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0, }}
				>
					<XAxis dataKey="name" />
					<YAxis dataKey="percentage" />
					<Tooltip />
					<Area type="basis" dataKey="percentage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
				</AreaChart>
			</ResponsiveContainer>
		</Container>
	);
}
