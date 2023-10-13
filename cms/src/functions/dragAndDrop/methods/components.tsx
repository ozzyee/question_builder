import React from 'react';
import ReactDOM from 'react-dom';
import {Answer} from "@/components/drop/answer";
import {Heading} from "@/components/drop/heading";

export class Components {
	static getComponent(componentName: string): HTMLElement | null {
		let component = null;

		switch (componentName) {
			case "Heading":
				component = <Heading/>;
				break;
			case "Answer":
				component = <Answer/>
				break;
			default:
				return null;
		}

		const container = document.createElement('div');

		ReactDOM.render(component, container);

		const htmlElement = container.firstChild as HTMLElement;

		ReactDOM.unmountComponentAtNode(container);
		return htmlElement;
	}
}
