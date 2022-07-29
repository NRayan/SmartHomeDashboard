import { createContext, ReactNode, useState } from "react";

type temperatureProps = {
	id: number,
	on: boolean,
	temperature: number
}

type temperatureContextData = {
	kitchenT: temperatureProps,
	bedroom1T: temperatureProps,
	bedroom2T: temperatureProps,
	livingRoomT: temperatureProps,
	switchTemperatureOn: (id: number) => void
}

type Props = {
	children: ReactNode
}

export const SmartHomeContext = createContext({} as temperatureContextData);

export function SmartHomeContextProvider({ children }: Props) {

	const [kitchenT, setKitchenT] = useState<temperatureProps>({ id: 1, on: false, temperature: 35 });
	const [bedroom1T, setBedroom1T] = useState<temperatureProps>({ id: 2, on: false, temperature: 35 });
	const [bedroom2T, setBedroom2T] = useState<temperatureProps>({ id: 3, on: false, temperature: 35 });
	const [livingRoomT, setLivingRoomT] = useState<temperatureProps>({ id: 4, on: false, temperature: 35 });

	function switchTemperatureValue(id: number) {
		switch (id) {
		case 1:
			setKitchenT({ ...kitchenT, on: !kitchenT.on });
			break;
		case 2:
			setBedroom1T({ ...bedroom1T, on: !bedroom1T.on });
			break;
		case 3:
			setBedroom2T({ ...bedroom2T, on: !bedroom2T.on });
			break;
		case 4:
			setLivingRoomT({ ...livingRoomT, on: !livingRoomT.on });
			break;

		default:
			break;
		}
	}

	return (
		<SmartHomeContext.Provider value={{
			kitchenT: kitchenT,
			bedroom1T: bedroom1T,
			bedroom2T: bedroom2T,
			livingRoomT: livingRoomT,
			switchTemperatureOn: switchTemperatureValue
		}}>
			{children}
		</SmartHomeContext.Provider>
	);
}
