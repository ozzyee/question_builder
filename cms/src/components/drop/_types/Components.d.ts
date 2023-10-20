import {OnContentChange} from "@/_types/onContentChange";

export type Components = "form" | "text" | "headings" | "answer"
export type CustomValues = function | string | number | boolean

type ComponentSelectorProps = {
	component: Components,
	placeholder: string | {
		[k: string]: string
	},
	id: string,
	onContentChange: OnContentChange
	onDelete?: (id: string) => void
	customValues?: { [k: string]: CustomValues }
}

