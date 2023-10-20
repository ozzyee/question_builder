import {useState} from "react";
import {OnContentChange} from "@/_types/onContentChange";

type HeaderProps = {
	id: string
	type: string
	placeholder: string
	onContentChange: OnContentChange
	// this is once it has been changed by the user
	value: {
		id: string
		content: string
		component: string
	}
}


export const Header = ({id, type, placeholder, onContentChange, value}: HeaderProps) => {
	const [_values, setValues] = useState(value?.content || "")

	const styles = {
		h1: "text-4xl font-bold text-gray-800 w-[100%] no-outline",
		h2: "text-3xl font-bold text-gray-800 w-[100%] no-outline",
		h3: "text-2xl font-bold text-gray-800 w-[100%] no-outline",
		h4: "text-xl font-bold text-gray-800 w-[100%] no-outline",
		h5: "text-lg font-bold text-gray-800 w-[100%] no-outline",
		h6: "text-base font-bold text-gray-800 w-[100%] no-outline",
	}

	return (
		 <input
				type="text"
				id={id}
				onChange={(evt) => {
					setValues(evt.target.value)
					onContentChange({
						id: id,
						content: evt.target.value,
						component: "heading"
					});
				}}
				className={`${styles[type as keyof typeof styles]} font-bold text-gray-800 w-[100%] no-outline`}
				placeholder={placeholder}
				value={_values}
		 />
	)
}