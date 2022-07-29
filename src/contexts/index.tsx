import { createContext, ReactNode, useState } from "react";
import { mockedRooms } from "../mock";
import { roomType } from "../types";

type temperatureContextData = {
	rooms: roomType[]
	changeSelected: (id: number) => void,
	updateRoom: (newRoomState: roomType) => void,
}

type Props = {
	children: ReactNode
}

export const SmartHomeContext = createContext({} as temperatureContextData);

export function SmartHomeContextProvider({ children }: Props) {

	const [rooms, setRooms] = useState<roomType[]>(mockedRooms);

	function handleRoomUpdate(room: roomType) {
		const selectedRoom = rooms.find(x => x.id === room.id);
		const index = selectedRoom && rooms.indexOf(selectedRoom);
		if (!index) return;
		const newArr = [...rooms];
		newArr[index] = room;
		setRooms(newArr);
	}

	function handleSelectedRoomUpdate(id: number) {
		const selectedRoom = rooms.find(x => x.id === id);
		const index = selectedRoom && rooms.indexOf(selectedRoom);
		const newArr = [...rooms];
		newArr.forEach(x => x.selected = false);
		if (index != undefined) {
			newArr[index].selected = true;
			setRooms(newArr);
		}
	}

	return (
		<SmartHomeContext.Provider value={{
			rooms: rooms,
			updateRoom: handleRoomUpdate,
			changeSelected: handleSelectedRoomUpdate
		}}>
			{children}
		</SmartHomeContext.Provider>
	);
}
