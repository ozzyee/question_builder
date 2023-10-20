import React, {useState} from 'react';
import {Headings} from "@/components/drop/components/headings";
import {MultiSelectButton, MultiSelectButtonItems} from "@/components/MultiSelectButton";
import {ComponentSelector} from "@/components/drop/components";
import {Components} from "@/components/drop/_types/Components";

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
		 <div className={"p-4"}>
			 <ComponentSelector
					component={"headings"}
					placeholder={{
						heading: "Heading",
						subHeading: "Sub Heading"
					}}
					id={"headings"}
					onContentChange={() => {}}
			 />
			 <div>
				 {components?.map((component, index) => {
					 return (
						 <ComponentSelector
								key={index}
								component={component}
								placeholder={""}
								id={component}
								onContentChange={() => {}}
						 />
					 )
				 })}
			 </div>
			 <MultiSelectButton items={items} title={"Add Component"} onItemSelect={onItemSelect}/>
		 </div>
	);
}

export default OutcomeLayout;