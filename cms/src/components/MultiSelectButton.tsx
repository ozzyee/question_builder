import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import React, {Fragment} from "react";
import {classNames} from "@/functions/_helper/tailwind";

export type MultiSelectButtonItems = {
	name: string,
	component?: string
}

type MultiSelectButton = {
	items: MultiSelectButtonItems[],
	title: string
	onItemSelect: (item: string) => void
}

export function MultiSelectButton({items, title, onItemSelect}: MultiSelectButton) {

	return (
		 <div className="inline-flex rounded-md shadow-sm">
			 <button
					type="button"
					className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
			 >
				 Add Component
			 </button>
			 <Menu as="div" className="relative -ml-px block">
				 <Menu.Button
						className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
					 <span className="sr-only">{title}</span>
					 <ChevronDownIcon className="h-5 w-5" aria-hidden="true"/>
				 </Menu.Button>
				 <Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
				 >
					 <Menu.Items
							className="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						 <div className="py-1">
							 {items.map((item) => (
									<Menu.Item key={item.name}>
										{({active}) => (
											 <button
													onClick={() => {
														onItemSelect(item.component || item.name)
													}}
													className={classNames(
														 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														 'block px-4 py-2 text-sm w-full text-left'
													)}
											 >
												 {item.name}
											 </button>
										)}
									</Menu.Item>
							 ))}
						 </div>
					 </Menu.Items>
				 </Transition>
			 </Menu>
		 </div>
	)
}
