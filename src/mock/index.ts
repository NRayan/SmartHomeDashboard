/* eslint-disable no-mixed-spaces-and-tabs */
import { BiSlideshow } from "react-icons/bi";
import { MdKitchen, MdOutlineBed } from "react-icons/md";
import { roomType } from "../types";

export const mockedRooms: roomType[] =
	[
		{
			id: 1,
			title: "Kitchen",
			on: false,
			selected: true,
			temperature: 24,
			Icon: MdKitchen
		},
		{
			id: 2,
			title: "Bedroom 1",
			on: false,
			selected: false,
			temperature: 24,
			Icon: MdOutlineBed
		},
		{
			id: 3,
			title: "Bedroom 2",
			on: false,
			selected: false,
			temperature: 24,
			Icon: MdOutlineBed
		},
		{
			id: 4,
			title: "Living Room",
			on: false,
			selected: false,
			temperature: 24,
			Icon: BiSlideshow
		}
	];