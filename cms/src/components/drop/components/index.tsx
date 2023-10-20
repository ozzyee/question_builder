import React from "react";

export function ComponentSelector({component, onComponentChange}: ComponentSelectorProps) {
	if (component === "form") {
		return (
			 <p>im a form</p>
		)
	}

	if (component === "text") {
		return (
			 <p>im a text</p>
		)
	}

	return null
}