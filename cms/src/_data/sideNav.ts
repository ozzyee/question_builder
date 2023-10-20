import {FaQuestion} from "react-icons/fa";
import {DocumentIcon} from "@heroicons/react/24/outline";
import {WindowIcon} from "@heroicons/react/20/solid";
import {SideNavNavigation, TSideNavTiles} from "@/_types/sideNav";
import {BiLogOutCircle} from "react-icons/bi";


const layoutTiles: TSideNavTiles[] = [
	{
		name: "Question layout",
		icon: FaQuestion,
		componentType: "QuestionLayout",
	},
	{
		name: "Outcome layout",
		icon: BiLogOutCircle,
		componentType: "OutcomeLayout",
	}
]

export const tiles = {
	components: layoutTiles,
	layouts: layoutTiles,
	pages: []
}

export const navigation: SideNavNavigation[] = [
	{
		name: "Components",
		href: '?panel=components',
		icon: WindowIcon,
		panel: 'components',
	},
	{
		name: "Pages",
		href: '/?panel=pages',
		panel: 'pages',
		icon: DocumentIcon,
	}
]