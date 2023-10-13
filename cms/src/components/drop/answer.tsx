import {ArrowUpTrayIcon, TrashIcon} from "@heroicons/react/24/outline";


export const Answer = () => {
	return (
		 <div className={"p-1"} data-answer-component="">
			 <div
					className={"h-24 shadow-md border border-blue-400 rounded-md w-[140px] h-[140px] justify-center items-center flex flex-col relative"}>
				 <div className={"absolute top-3 right-3"}>
					 <TrashIcon height={18}/>
				 </div>
				 {/* todo: add this pack in once ready to upload files */}
				 {/*<ArrowUpTrayIcon width={24}/>*/}
				 <p contentEditable={true}>Answer...</p>
				 <button data-redirect={"home"}>Select Redirect</button>
			 </div>
		 </div>
	)
}