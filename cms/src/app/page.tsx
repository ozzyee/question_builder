"use client";

import {DragAndDrop} from "@/functions/dragAndDrop";
import {useEffect} from "react";
import {ScreenObserver} from "@/functions/screenObserver";

export default function Home() {
	const {drop, allowDrop} = DragAndDrop;

	useEffect(() => {
		window.addEventListener('drop', ScreenObserver.observe);
		window.addEventListener("input", ScreenObserver.observe)

		return () => {
			window.removeEventListener('drop', ScreenObserver.observe);
			window.removeEventListener("input", ScreenObserver.observe)
		}
	}, [])


	return (
		 <div>
			 <header className="shrink-0 bg-gray-900 z-50">
				 <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					 <img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
					 />
					 <div className="flex items-center gap-x-8">
						 {/**/}
					 </div>
				 </div>
			 </header>
			 <div className="flex flex-row max-width">
				 <div
						id={"dropzone"}
						onDrop={drop}
						onDragOver={allowDrop}
						className="w-[50%] h-[92vh] p-4 border border-blue-500">
				 </div>
				 <div className="w-[50%] max-hight p-4 border border-blue-500">
					 preview
				 </div>
			 </div>
		 </div>
	)
}
