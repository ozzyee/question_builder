import {ChangeEvent, useEffect, useState} from "react";
import {ArrowUpTrayIcon, TrashIcon} from "@heroicons/react/24/outline";
import {OnContentChange} from "@/_types/onContentChange";
import DropDown, {SelectValue} from "@/components/dropDown";
import LocalStorage from "@/functions/localStorage";
import {projectKey} from "@/_data/defaults";
import {usePathname} from "next/navigation";

type AnswerProps = {
	id: string;
	onDelete: (id: string) => void;
	onContentChange: OnContentChange
	placeholder: string;
	handleAddNewPage: any;
	redirect: any;
}

export const Answer = ({id, onDelete, onContentChange, placeholder, handleAddNewPage, redirect}: AnswerProps) => {
	const path = usePathname()
	const [data, setData] = useState<any>(null);
	const [pages, setPages] = useState<SelectValue[] | null>(null);

	useEffect(() => {
		if (!data) return;
		onContentChange({
			id: data.id,
			content: data.content || placeholder,
			redirect: data.redirect || "",
			component: data.component,
		});
	}, [data]);

	useEffect(() => {
		const loadData = () => {
			const data = LocalStorage.onLoad(projectKey) || {};
			if (!data) return;

			delete data[path.split("/")[1]]

			const _data = Object.keys(data).map((key, index) => {
				return {
					id: index + 1,
					name: key.split("-").join(" ")
				}
			})

			setPages(_data);
		}
		loadData();
	}, [])

	return (
		 <div className={"p-1"} id={id}>
			 <div
					className={"h-24 shadow-md border border-blue-400 rounded-md w-[200px] h-[180px] justify-center items-center flex flex-col relative"}>
				 <button
						onClick={() => {
							onDelete && onDelete(id);
						}}
						className={"absolute top-3 right-3"}
						id={"answer-delete-btn"}
				 >
					 <TrashIcon height={18} className={"answer-delete-btn"}/>
				 </button>
				 {/* todo: add this back in once ready to upload files */}
				 {/*<ArrowUpTrayIcon width={24}/>*/}
				 {/*<p*/}
					{/*	contentEditable={true}*/}
					{/*	onInput={(ev: ChangeEvent<HTMLParagraphElement>) => {*/}
					{/*		setData({*/}
					{/*			...data,*/}
					{/*			id: id,*/}
					{/*			content: ev.target.innerText,*/}
					{/*			component: "answer"*/}
					{/*		})*/}
					{/*	}}*/}
				 {/*>*/}
					{/* {placeholder}*/}
				 {/*</p>*/}

				 <input
						type="text"
						className={"w-full h-10 p-2"}
						placeholder={placeholder}
				  />

				 <DropDown
						value={redirect}
						onClick={handleAddNewPage}
						hasButton={true}
						buttonText={"Add New Page"}
						onChange={(val) => {
							setData({
								...data,
								id: id,
								redirect: val,
								component: "answer"
							})
						}}
						data={pages}
				 />
			 </div>
		 </div>
	)
}