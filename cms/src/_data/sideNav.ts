import {FaQuestion} from "react-icons/fa";
import {DocumentIcon} from "@heroicons/react/24/outline";
import {WindowIcon} from "@heroicons/react/20/solid";
import {SideNavNavigation, TSideNavTiles} from "@/_types/sideNav";
import {BiLogOutCircle} from "react-icons/bi";


const layoutTiles: TSideNavTiles[] = [
	{
		name: "Question",
		icon: FaQuestion,
		componentType: "QuestionLayout",
	},
	{
		name: "Outcome",
		icon: BiLogOutCircle,
		componentType: "OutcomeLayout",
	}
]

export const tiles = {
	components: [],
	layouts: layoutTiles,
	pages: []
}

export const navigation: SideNavNavigation[] = [
	{
		name: "Layouts",
		href: '?panel=layouts',
		icon: WindowIcon,
		panel: 'layouts',
	},
	{
		name: "Pages",
		href: '/?panel=pages',
		panel: 'pages',
		icon: DocumentIcon,
	}
]