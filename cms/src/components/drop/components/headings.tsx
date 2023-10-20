import {OnContentChange} from "@/_types/onContentChange";
import {ChangeEvent, useEffect, useState} from "react";

type HeadingProps = {
	id: string;
	onContentChange: OnContentChange
	placeholder: {
		heading: string,
		subHeading: string
	}
	values: {
		heading?: string,
		subHeading?: string
	}
}

export const Headings = ({onContentChange, id, placeholder, values}: HeadingProps) => {
	const [_values,setValues] = useState(values)

	return (
		 <div data-component={"heading"} id={id}>
			 <input
					onChange={(evt) => {
						setValues({
							..._values,
							heading: evt.target.value
						})
						onContentChange({
							id: id,
							content: evt.target.value,
							component: "heading"
						});
					}}
					className="text-4xl font-bold text-gray-800 w-[100%]"
					placeholder={placeholder.heading}
					value={_values?.heading}
			 />

			 <input
					className="text-2xl font-bold text-gray-800"
					contentEditable={true}
					onChange={(evt) => {
						setValues({
							..._values,
							subHeading: evt.target.value
						})

						onContentChange({
							id: id,
							content: evt.target.value,
							component: "subHeading"
						});
					}}
					placeholder={placeholder.subHeading}
					value={_values?.subHeading}
			 />
		 </div>
	)
}