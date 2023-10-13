import {DragAndDrop} from "@/functions/dragAndDrop";
import {ReactNode} from "react";

type TileProps = {
	name: string,
	Icon: ReactNode
	componentType: string
}

export const Tile = ({name, Icon, componentType}: TileProps) => {
	return (
		 <div className={"flex-item w-[50%] p-1"}>
			 <div
					data-component-type={componentType}
					onDragStart={DragAndDrop.drag}
					draggable={true}
					className={"h-24 text-center flex flex-col justify-center items-center shadow-md bg-gray-900 text-white rounded-md"}
			 >
				 <div className={"h-[60%] w-full flex justify-center items-center"}>
					 <Icon/>
				 </div>
				 <p>{name}</p>
			 </div>
		 </div>
	)
}