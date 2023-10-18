import {ReactNode} from "react";

export type SideNavTiles = {
	name: string
	icon: ReactNode
	componentType: string
}

export type SideNavNavigation = {
	name: string
	href: string
	icon: ReactNode
	panel: string
}