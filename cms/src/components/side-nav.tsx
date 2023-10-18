import React, {useEffect, useState} from 'react';
import {Tile} from "@/components/drag/tile";
import {tiles} from "@/_data/sideNav";
import {useSearchParams} from "next/navigation";

const SideNav = () => {
	const params = useSearchParams()
	const [_tiles, setTiles] = useState([]);
	const [title, setTitle] = useState("");

	useEffect(() => {
		const panel = params.get("panel")
		if(!panel) return;

		setTiles(tiles[panel])
		setTitle(panel.charAt(0).toUpperCase() + panel.slice(1))
	}, [params]);

	return (
		 <div>
			 <div className={"ms-4 pt-4 flex flex-col"}>
				 <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">
					 {title}
				 </h2>
				 <div className={"flex flex-wrap pt-5"}>
					 {_tiles.map(({name, icon, componentType}) => {
						 return (
								<Tile Icon={icon} name={name} componentType={componentType} key={name}/>
						 )
					 })}
				 </div>
			 </div>
		 </div>
	);
};

export default SideNav;