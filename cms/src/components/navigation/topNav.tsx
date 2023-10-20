"use client"
import React, {useState} from "react";
import {Popup} from "@/components/popup";

export const TopNav = () => {
	const [isPopUoOpen, setIsPopUpOpen] = useState(false)
	const [page, setPage] = useState<string[]>([])
	const [json, setJson] = useState<string[]>([])
	const [pageName, setPageName] = useState<string>("")

	const onSave = (value: string) => {

	}


	return (
		 <>
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
						 <button
                 onClick={() => setIsPopUpOpen(true)}
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
             >
                 Save
             </button>
					 </div>
				 </div>
			 </header>
		 </>
	)
}