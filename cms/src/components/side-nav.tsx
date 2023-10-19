"use client"
import React, {useEffect, useState} from 'react';
import {LongTile, Tile} from "@/components/drag/tile";
import {tiles} from "@/_data/sideNav";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import LocalStorage from "@/functions/localStorage";
import {projectKey} from "@/_data/defaults";

const SideNav = () => {
	const router = useRouter()
	const path = usePathname()
	const params = useSearchParams()
	const [_tiles, setTiles] = useState([]);
	const [title, setTitle] = useState("");
	const panel = params.get("panel")

	useEffect(() => {
		if (!panel) return;
		setTiles(tiles[panel])
		setTitle(panel.charAt(0).toUpperCase() + panel.slice(1))
	}, [params, router, path]);

	useEffect(() => {
		const localData = LocalStorage.onLoad(projectKey) || {}
		if (!localData || panel != "pages") return;

		const pages = Object.keys(localData).map((page) => {
			return {
				name: page.split("-").join(" "),
				tileType: "page",
				link: `/${page}`
			}
		})
		setTiles(pages)
	}, [router, panel, path]);

	return (
		 <div>
			 <div className={"ms-4 pt-4 flex flex-col"}>
				 <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">
					 {title}
				 </h2>
				 <div className={"flex flex-wrap pt-5"}>
					 {_tiles.map(({name, icon, componentType, tileType, link}) => {
						 const click = () => {
							 router.push(`${link}?panel=${params.get("panel")}`)
						 }

						 if (tileType === "page") {
							 return (
									<>
										<LongTile name={name} onClicked={click} active={path == link}/>
									</>
							 )
						 }

						 return <Tile Icon={icon} name={name} componentType={componentType} key={name}/>
					 })}

					 {panel == "pages" && (
							<button
								 onClick={() => router.push("/?panel=layouts")}
							>Add Page</button>
					 )}
				 </div>
			 </div>
		 </div>
	);
};

export default SideNav;