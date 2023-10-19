import {ReactNode} from "react";
import {WindowIcon} from "@heroicons/react/20/solid";

export type SideNavTiles = {
	name: string
	icon: ReactNode
	componentType: string
}

export type SideNavNavigation = {
	name: string
	href: string
	icon: typeof WindowIcon
	panel: string
}