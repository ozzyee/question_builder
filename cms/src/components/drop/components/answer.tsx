import {OnContentChange} from "@/_types/onContentChange";
import {OnDelete} from "@/_types/onDelete";
import {OnClickAddNewPage} from "@/_types/onClickAddNewPage";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import {TrashIcon} from "@heroicons/react/24/outline";
import DropDown, {SelectValue} from "@/components/dropDown";
import LocalStorage from "@/functions/localStorage";
import {projectKey} from "@/_data/defaults";

export type Redirect = {
	id: string;
	name: string;
}

type AnswerProps = {
	id: string;
	placeholder: string;
	redirect: Redirect;
	onContentChange: OnContentChange
	onDelete: OnDelete;
	onClickAddNewPage: OnClickAddNewPage;

	// this is the value of the answer after the user has typed in the input
	value: {
		id: string;
		content: string;
		redirect: Redirect;
	};
}

export const Answer = ({id, placeholder, onContentChange, onClickAddNewPage, onDelete, value}: AnswerProps) => {
	const path = usePathname()
	const [data, setData] = useState<any>(null);
	const [pages, setPages] = useState<SelectValue[] | null>(null);
	const [inputValue, setInputValue] = useState<string>(value?.content || "");


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
				 <input
						type="text"
						className={"w-full h-10 p-2 no-outline"}
						placeholder={placeholder}
						value={value?.content}
						onChange={(evt) => {
							setInputValue(evt.target.value);
							setData({
								id: id,
								content: evt.target.value,
								component: "answer",
								customValues: {
									redirect: value.redirect
								}
							});
						}}
				 />
				 <DropDown
						value={value?.redirect}
						onClick={onClickAddNewPage}
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