import {FaHeading, FaQuestion} from "react-icons/fa";
import {SquaresPlusIcon} from "@heroicons/react/24/outline";

export const tiles = [
	{
		name: 'Heading',
		icon: FaHeading,
		componentType: "Heading",
	},
	{
		name: 'Answer',
		icon: FaQuestion,
		componentType: "Answer",
	}
]

export const navigation = [
	{name: 'Components', href: '#', icon: SquaresPlusIcon, current: true},
	{name: "Layouts", href: '#', icon: SquaresPlusIcon, current: false},
]