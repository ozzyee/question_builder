"use client";

import {DragAndDrop} from "@/functions/dragAndDrop";
import {useEffect, useState} from "react";
import QuestionLayout, {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout";
import {Popup} from "@/components/popup";
import LocalStorage from "@/functions/localStorage";
import {useRouter, useSearchParams} from "next/navigation";
import {v4 as uuidv4} from "uuid";

export default function Home() {
	const router = useRouter()
	const params = useSearchParams()
	const [components, setComponents] = useState([])
	const [json, setJson] = useState<null | object>(null)
	const {drop, allowDrop} = DragAndDrop;
	const [isPopUoOpen, setIsPopUpOpen] = useState(false)


	useEffect(() => {
		const localData = LocalStorage.onLoad("test-project") || {}
		const pageName = params.get("page")
		const pageJson = localData[pageName]

		if (!pageJson) return;

		const componentsData = Object.keys(pageJson).map((key) => {
			const data = pageJson[key]
			return {
				component: data.componentType,
				contentId: data.id,
				order: data.order,
				props: data.data
			}
		})

		setComponents(componentsData)
	}, [])

	const onPageSaveButtonClick = () => {
		setIsPopUpOpen(true)
	}

	const onSave = (pageName: string) => {
		const localData = LocalStorage.onLoad("test-project") || {}
		const oldPageName = params.get("page")
		const newPageName = pageName.split(" ").join("-")
		delete localData[oldPageName]
		localData[newPageName] = json

		console.log(json)

		LocalStorage.onSave("test-project", localData)
		const url = `?panel=${params.get("panel")}&page=${pageName.split(" ").join("-")}`
		router.push(url)
		setIsPopUpOpen(false)
	}

	return (
		 <div>
			 <Popup
					open={isPopUoOpen}
					setOpen={setIsPopUpOpen}
					title={"Saved Page"}
					acceptText={"Save Page"}
					inputText={params.get("page") || ""}
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
									 onSave={onPageSaveButtonClick}
									 callBack={(content) => {
										 if (!content.id || !content.data) return;
										 setJson((prv) => {
											 return {
												 ...prv || {},
												 [content.id]: content
											 }
										 })
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


type RenderComponentProps = {
	component: string
	callBack: (data: any) => void
	componentProps: any
	contentId: string
	order: number
}

const RenderComponent = ({component, callBack, componentProps, contentId, order}: RenderComponentProps) => {
	const components = {
		QuestionLayout: QuestionLayout
	}

	if (!components[component]) {
		return;
	}

	const Component = components[component];

	return (<Component callBack={callBack} {...componentProps} contentId={contentId} order={order}/>)
};