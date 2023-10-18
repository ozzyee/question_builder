import {ChangeEvent, useEffect, useState} from "react";
import {ArrowUpTrayIcon, TrashIcon} from "@heroicons/react/24/outline";
import {OnContentChange} from "@/_types/onContentChange";
import Select from "@/components/Select";

type AnswerProps = {
	id: string;
	onDelete: (id: string) => void;
	onContentChange: OnContentChange
	placeholder: string;
	handleAddNewPage: any;
	redirect: any;
}

export const Answer = ({id, onDelete, onContentChange, placeholder, handleAddNewPage, redirect}: AnswerProps) => {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		if (!data) return;
		onContentChange({
			id: data.id,
			content: data.content || placeholder,
			redirect: data.redirect || "",
			component: data.component,
		});
	}, [data]);

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
				 <p
						contentEditable={true}
						onInput={(ev: ChangeEvent<HTMLParagraphElement>) => {
							setData({
								...data,
								id: id,
								content: ev.target.innerText,
								component: "answer"
							})
						}}
				 >
					 {placeholder}
				 </p>
				 <Select
						value={redirect}
						handleAddNewPage={handleAddNewPage}
						onChange={(val) => {
							setData({
								...data,
								id: id,
								redirect: val,
								component: "answer"
							})
						}}
				 />
			 </div>
		 </div>
	)
}