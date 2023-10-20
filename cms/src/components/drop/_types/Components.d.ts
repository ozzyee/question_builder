import {OnContentChange} from "@/_types/onContentChange";
import {Layouts} from "@/_data/layouts";

export type Components = "form" | "text" | "headings" | "answer" | "header"| "wrapper"
export type CustomValues = function | string | number | boolean

type ComponentSelectorProps = {
	component: Components,
	placeholder?: string | {
		[k: string]: string
	},
	id: string,
	onContentChange: OnContentChange
	onDelete?: (id: string) => void
	customProps?: { [k: string]: CustomValues }
	values?: { [k: string]: CustomValues }
	children?: Layouts[]
}

