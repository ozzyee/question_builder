import React, {useState} from 'react';
import {Heading} from "@/components/drop/components/heading";
import {MultiSelectButton, MultiSelectButtonItems} from "@/components/MultiSelectButton";
import {ComponentSelector} from "@/components/drop/components";

const _items = [
	{name: 'Add Form', component: "form"},
	{name: 'Add Text', component: "text"},
]

function OutcomeLayout() {
	const [components, setComponents] = useState<Components[] | null>(null)
	const [items, setItems] = useState<MultiSelectButtonItems[]>(_items)

	const onItemSelect = (selectedComponent: string) => {
		if (selectedComponent === "form") {
			setItems(_items.filter(item => item.component !== "form"))
		}

		setComponents([...(components || []), selectedComponent as Components])
	}

	return (
		 <div>
			 <Heading id={""} onContentChange={() => {
			 }} placeholders={{
				 heading: "Title",
				 subHeading: "Subtitle",
			 }}/>
			 <div>
				 {
					 components?.map((component, index) => {
						 return (
								<ComponentSelector
									 key={index}
									 component={component}
									 onComponentChange={(component) => {
									 }}
								/>
						 )
					 })
				 }
			 </div>
			 <MultiSelectButton items={items} title={"Add Component"} onItemSelect={onItemSelect}/>
		 </div>
	);
}

export default OutcomeLayout;