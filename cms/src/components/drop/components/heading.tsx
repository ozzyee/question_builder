import {OnContentChange} from "@/_types/onContentChange";
import {ChangeEvent} from "react";

type HeadingProps = {
	id: string;
	onContentChange: OnContentChange
	placeholder: {
		heading: string,
		subHeading: string
	}
}

export const Heading = ({onContentChange, id, placeholder}: HeadingProps) => {
	return (
		 <div data-component={"heading"} id={id}>
			 <h1
					onInput={(evt: ChangeEvent<HTMLParagraphElement>) => {
						onContentChange({
							id: id,
							content: evt.target.innerText,
							component: "heading"
						});
					}}
					className="text-4xl font-bold text-gray-800"
					contentEditable={true}
			 >
				 {placeholder.heading}
			 </h1>
			 <h2
					className="text-2xl font-bold text-gray-800"
					contentEditable={true}
					onInput={(evt: ChangeEvent<HTMLParagraphElement>) => {
						onContentChange({
							id: id,
							content: evt.target.innerText,
							component: "subHeading"
						});
					}}
			 >
				 {placeholder.subHeading}
			 </h2>
		 </div>
	)
}