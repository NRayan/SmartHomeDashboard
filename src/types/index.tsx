import { IconType } from "react-icons/lib";

export type roomType = {
	id: number,
	on: boolean,
	temperature: number,
	selected:boolean,
	title: string,
	Icon: IconType
}