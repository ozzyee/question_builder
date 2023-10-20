import {OnContentChange} from "@/_types/onContentChange";

type Components = "form" | "text" | "headings" | "answer"

type ComponentSelectorProps = {
	component: Components,
	placeholder: string | {
		[k: string]: string
	},
	id: string,
	onContentChange: OnContentChange
	onDelete?: (id: string) => void
	customValues?: {[k: string]: any}
}

