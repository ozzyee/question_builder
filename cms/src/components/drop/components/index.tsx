import React from "react";
import {ComponentSelectorProps} from "@/components/drop/_types/Components";
import {Answer} from "@/components/drop/components/answer";
import {Header} from "@/components/drop/components/header";
import {Wrapper} from "@/components/drop/components/wrapper";

export const Text = () => {
	return <p>text...</p>
}

export function ComponentSelector(props: ComponentSelectorProps) {
	const components: { [k: string]: any } = {
		answer: Answer,
		header: Header,
		wrapper: Wrapper,

		// // old will be removed
		// headings: Headings,
		// form: Form,
		// text: Text,
		// input: Input,
	}

	if (!components[props.component]) {
		console.error(`no component found with name of ${props.component}`)
		return null
	}

	const Component = components[props.component]

	return <Component {...props}/>
}