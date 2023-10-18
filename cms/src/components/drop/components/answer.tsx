import {ChangeEvent} from "react";
import {ArrowUpTrayIcon, TrashIcon} from "@heroicons/react/24/outline";
import {OnContentChange} from "@/_types/onContentChange";

type AnswerProps = {
	id: string;
	onDelete: (id: string) => void;
	onContentChange: OnContentChange
	placeholder: string;
}

export const Answer = ({id, onDelete, onContentChange, placeholder}: AnswerProps) => {
	return (
		 <div className={"p-1"} id={id}>
			 <div
					className={"h-24 shadow-md border border-blue-400 rounded-md w-[140px] h-[140px] justify-center items-center flex flex-col relative"}>
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
							onContentChange({
								id: id,
								content: ev.target.innerText,
								component: "answer"
							})
						}}
				 >
					 {placeholder}
				 </p>
				 <button data-redirect={"home"}>Select Redirect</button>
			 </div>
		 </div>
	)
}