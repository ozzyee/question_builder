import {DragEvent} from "react";

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
		return ev.dataTransfer.getData("component");
	}
}