"use client"
import React, {useEffect, useState} from 'react';
import {LongTile, Tile} from "@/components/drag/tile";
import {navigation, tiles} from "@/_data/sideNav";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import LocalStorage from "@/functions/localStorage";
import {projectKey} from "@/_data/defaults";
import {TSideNavTiles} from "@/_types/sideNav";
import Link from "next/link";
import {classNames} from "@/functions/_helper/tailwind";

export const SideNav = () => {
	const router = useRouter()
	const path = usePathname()
	const params = useSearchParams()
	const [_tiles, setTiles] = useState<TSideNavTiles[] | null>(null);
	const [title, setTitle] = useState("");
	const panel = params.get("panel")

	useEffect(() => {
		if(!panel){
			router.push("/?panel=pages")
		}
	}, []);

	useEffect(() => {
		if (!panel) return;
		const panelTiles = tiles[panel as keyof typeof tiles]
		setTiles(panelTiles)
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
		 <>
			 <div
					className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
				 <div className="flex h-16 shrink-0 items-center justify-center">
					 <img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
					 />
				 </div>
				 <nav className="mt-8">
					 <ul role="list" className="flex flex-col items-center space-y-1">
						 {navigation.map((item) => {
							 return (
									<li key={item.name}>
										<Link
											 href={item.href}
											 className={classNames(
													panel == item.panel ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
													'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
											 )}
										>
											<item.icon className="h-6 w-6 shrink-0" aria-hidden="true"/>
											<span className="sr-only">{item.name}</span>
										</Link>
									</li>
							 )
						 })}
					 </ul>
				 </nav>
			 </div>

			 {/* draggable components nav */}
			 <aside className="fixed xl:pl-20 inset-y-0 hidden w-96 px-4 xl:block bg-gray-800">
				 <div>
					 <div className={"ms-4 pt-4 flex flex-col"}>
						 <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">
							 {title}
						 </h2>
						 <div className={"flex flex-wrap pt-5"}>
							 {_tiles?.map(({name, icon, componentType, tileType, link}) => {
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

								 if (!componentType || !name || !icon) return null;

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
			 </aside>
		 </>
	)
}