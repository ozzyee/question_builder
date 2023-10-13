import {DragEvent} from "react";
import {Components} from "@/functions/dragAndDrop/methods/components";
import {v4 as uuidv4 } from "uuid";

export class DragAndDrop {
	static drag(ev: DragEvent<HTMLDivElement> | undefined) {
		if (!ev) return;

		const target = ev.target as HTMLElement;
		const component = target.dataset.componentType;

		if (!component) return;

		ev.dataTransfer.setData("component", component);
	}

	static allowDrop(ev: DragEvent<HTMLDivElement> | undefined) {
		if (!ev) return;

		ev.preventDefault();
	}

	static drop(ev: DragEvent<HTMLDivElement> | undefined) {
		if (!ev) return;

		ev.preventDefault();
		const componentName = ev.dataTransfer.getData("component");
		const component = Components.getComponent(componentName);


		if (!component || !(ev.target instanceof HTMLElement)) return;

		if (componentName == "Answer") {
			const answers = document.getElementById("answers")

			component.setAttribute("id", uuidv4())

			if (answers) {
				answers.appendChild(component)
				return;
			}

			const div = document.createElement("div")
			div.setAttribute("id", "answers");
			div.setAttribute("class", "flex flex-wrap items-center content-center")
			div.appendChild(component)

			ev.target.appendChild(div)
			return;
		}

		if (componentName == "Heading") {
			const dropzone = document.getElementById("dropzone")
			dropzone?.insertBefore(component, dropzone?.firstChild || null)
			return;
		}
	}
}