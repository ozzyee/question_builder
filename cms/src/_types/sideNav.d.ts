import {ReactNode} from "react";
import {WindowIcon} from "@heroicons/react/20/solid";

export type TSideNavTiles = {
	name: string
	icon?: any
	componentType?: string
	tileType?: string
	link?: string
}

export type SideNavNavigation = {
	name: string
	href: string
	icon: any
	panel: string
}