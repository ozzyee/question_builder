import React from "react";
import {Answer} from "@/components/drop/components/answer";
import {Headings} from "@/components/drop/components/headings";
import {ComponentSelectorProps} from "@/components/drop/_types/Components";

export const Form = () => {
	return <p>form...</p>
}

export const Text = () => {
	return <p>text...</p>
}

export function ComponentSelector({component, placeholder, id, onContentChange, onDelete, customValues}: ComponentSelectorProps) {
	const components: { [k: string]: any } = {
		answer: Answer,
		headings: Headings,
		form: Form,
		text: Text,
	}

	if (!components[component]) {
		console.error(`no component found with name of ${component}`)
		return null
	}

	const Component = components[component]

	const props = {
		placeholder: placeholder || "",
		id: id,
		onContentChange,
		onDelete,
		...customValues
	}

	return <Component {...props}/>
}