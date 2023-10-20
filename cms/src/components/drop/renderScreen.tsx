"use client"
import {Layouts} from "@/_data/layouts";
import {ComponentSelector} from "@/components/drop/components";
import {OnContentChangeEvent} from "@/_types/onContentChange";
import React, {useState} from "react";

type RenderScreenProps = {
	pageData: Layouts[]
}

export const RenderScreen = ({pageData}: RenderScreenProps) => {
	const [data, setData] = useState<Layouts[]>(pageData)

	const onContentChange = (values: OnContentChangeEvent) => {
		const updatedData = updateContentById(values.id, values, data)
		setData(updatedData)
		console.log("content change bitch values: ", JSON.stringify(updatedData))
	}

	const updateContentById = (id: string, content: OnContentChangeEvent, currentLayouts: Layouts[]) => {
		return currentLayouts.map(layout => {

			if (layout.id == id) {
				const newValues = {
					...layout.props,
					value: content
				}


				return {
					...layout,
					props: newValues
				}
			}

			if (layout.props.children) {
				const values: Layouts[] = updateContentById(id, content, layout.props.children)

				return {
					...layout,
					props: {
						...layout.props,
						children: values
					}
				}
			}

			return layout;
		});
	}


	const onClickAddNewPage = () => {
		console.log("Add New page mate")
	}

	const onDelete = (id: string) => {
		console.log("delete me mother fucker id: ", id)

		const newSate = deleteLayoutById(id, data)
		setData(newSate)
	}


	function deleteLayoutById(id: string, currentLayouts: Layouts[]) {
		return currentLayouts.filter(layout => {
			if (layout.id === id) {
				return false;
			}

			if (layout.props && layout.props.children) {
				layout.props.children = deleteLayoutById(id, layout.props.children);
				return true;
			}

			return true;
		});
	}


	return (
		 <div className={"p-4"}>
			 {
				 data.map((layout, index) => {
					 const props = {
						 ...layout.props,
						 id: layout.id,
						 component: layout.component,
						 order: layout.order,
						 onContentChange,
						 onDelete,
						 onClickAddNewPage,
					 }

					 return (
							<ComponentSelector {...props} key={index}/>
					 )
				 })
			 }
		 </div>
	)
}