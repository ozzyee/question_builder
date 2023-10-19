import React, {useEffect, useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {DragAndDrop} from "@/functions/dragAndDrop";
import LocalStorage from "@/functions/localStorage";
import {Popup} from "@/components/popup";
import {v4 as uuidv4} from "uuid";
import {RenderComponent} from "@/components/RenderComponent";
import {projectKey} from "@/_data/defaults";
import {Component} from "@/components/layout/mainLayout/types/component";

function Index({page}: { page?: string }) {
	const {drop, allowDrop} = DragAndDrop;
	const router = useRouter()
	const params = useSearchParams()
	const [components, setComponents] = useState<Component[]>([])
	const [json, setJson] = useState<null | object>(null)
	const [isPopUoOpen, setIsPopUpOpen] = useState(false)


	useEffect(() => {
		const localData = LocalStorage.onLoad("test-project") || {}
		const pageJson = localData[page as keyof typeof localData]


		if (!pageJson) return;

		const componentsData = Object.keys(pageJson).map((key) => {
			const data = pageJson[key as keyof typeof localData]
			return {
				component: data.componentType,
				contentId: data.id,
				order: data.order,
				props: data.data
			}
		})

		setComponents(componentsData)
	}, [page])

	const onPageSaveButtonClick = () => {
		setIsPopUpOpen(true)
	}

	const onSave = (pageName: string, _url?: string) => {
		const localData = LocalStorage.onLoad(projectKey) || {}
		const oldPageName = page?.length ? page[0] : ""
		let newPageName = pageName?.split(" ").length > 1 ? pageName.split(" ").join("-") : pageName

		if (!newPageName) {
			newPageName = `new-${uuidv4()}`
		}

		delete localData[oldPageName]
		localData[newPageName] = json

		LocalStorage.onSave(projectKey, localData)
		const url = `/${pageName.split(" ").join("-") || newPageName}?panel=${params.get("panel")}`
		router.push(_url ? _url : url)
		setIsPopUpOpen(false)
	}

	return (
		 <div>
			 <Popup
					open={isPopUoOpen}
					setOpen={setIsPopUpOpen}
					title={"Saved Page"}
					acceptText={"Save Page"}
					inputText={page?.length ? page[0] : ""}
					onAccept={onSave}
			 />
			 <header className="shrink-0 bg-gray-900 z-50">
				 <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					 <img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
					 />
					 <div className="flex items-center gap-x-8">
						 {json && <button
                 onClick={onPageSaveButtonClick}
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
             >
                 Save
             </button>}
					 </div>
				 </div>
			 </header>
			 <div className="flex flex-row max-width">
				 <div
						id={"dropzone"}
						onDrop={(ev) => {
							const droppedComponent = drop(ev)

							if(!droppedComponent) return;

							setComponents([...components, {
								component: droppedComponent,
								contentId: uuidv4(),
								order: components.length,
								props: {}
							}])
						}}
						onDragOver={allowDrop}
						className="w-[50%] h-[92vh] p-4 border border-blue-500">
					 {components.map(({component, props, contentId, order}) => {
						 return (
								<RenderComponent
									 component={component}
									 callBack={(content) => {
										 if (!content.id || !content.data) return;

										 setJson((prv) => {
											 return {
												 ...prv || {},
												 [content.id]: content
											 }
										 })

										 if (content.save && page?.length) {
											 onSave(page[0] || "temp-page", "/?panel=layouts")
										 }
									 }}
									 componentProps={props}
									 contentId={contentId}
									 order={order}
								/>
						 )
					 })}
				 </div>

				 <div className="w-[50%] max-hight p-4 border border-blue-500">
					 preview
				 </div>
			 </div>
		 </div>
	)
}

export default Index;