import {DragAndDrop} from "@/functions/dragAndDrop";

type TileProps = {
	name: string,
	Icon: any,
	componentType: string
}

export const Tile = ({name, Icon, componentType}: TileProps) => {
	return (
		 <div className={"flex-item w-[50%] p-1 cursor-grab"}>
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

type LongTileProps = {
	name: string
	onClicked: () => void
	active: boolean
}

export const LongTile = ({name, onClicked, active}: LongTileProps) => {
	return (
		 <div className="flex-item w-[100%] p-1" onClick={onClicked}>
			 <div className={
				 `h-10 text-center flex flex-col justify-center items-start ps-4 shadow-md rounded-md cursor-pointer ${
						active
							 ? 'bg-gray-800 border border-gray-900 border text-white'
							 : 'bg-white text-gray-900 border border-gray-900'
				 }`
			 }>
				 <p>{name}</p>
			 </div>
		 </div>
	)
}