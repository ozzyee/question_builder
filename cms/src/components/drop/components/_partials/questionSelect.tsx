import {Fragment, useEffect, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import LocalStorage from "@/functions/localStorage";
import {usePathname} from "next/navigation";
import {projectKey} from "@/_data/defaults";
import {classNames} from "@/functions/_helper/tailwind";
import {TType} from "ts-interface-checker";

type SelectProps = {
	handleAddNewPage: () => void;
	onChange: (val:  SelectValue) => void;
	value: SelectValue
}

type SelectValue = {
	id: number | string;
	name: string;
}

export default function QuestionSelect({handleAddNewPage, onChange, value}: SelectProps) {
	const path = usePathname()
	const [selected, setSelected] = useState<SelectValue>({id: 0, name: "Select an option"})
	const [data, setData] = useState<SelectValue[] | []>([])

	useEffect(() => {
		if (!value) return;
		setSelected(value)
	}, [value])

	useEffect(() => {
		const loadData = () => {
			const data = LocalStorage.onLoad(projectKey) || {};
			if (!data) return;

			delete data[path.split("/")[1]]

			const _data = Object.keys(data).map((key, index) => {
				return {
					id: index + 1,
					name: key.split("-").join(" ")
				}
			})

			setData(_data);
		}

		loadData();
	}, [])

	return (
		 <Listbox value={selected} onChange={(val) => {
			 onChange(val)
			 setSelected(val)
		 }}>
			 {({open}) => (
					<>
						<Listbox.Label className="mt-6 block text-sm font-medium leading-4 text-gray-900">Assigned
							to</Listbox.Label>
						<div className="relative mt-2">
							<Listbox.Button
								 className="relative w-[180px] cursor-default rounded-md bg-white py-1.5 pl-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
								<span className="block truncate">{selected.name}</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
							</Listbox.Button>

							<Transition
								 show={open}
								 as={Fragment}
								 leave="transition ease-in duration-100"
								 leaveFrom="opacity-100"
								 leaveTo="opacity-0"
							>
								<Listbox.Options
									 className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
									{data?.map((_data) => (
										 <Listbox.Option
												key={_data.id}
												className={({active}) =>
													 classNames(
															active ? 'bg-indigo-600 text-white' : 'text-gray-900',
															'relative cursor-default select-none py-2 pl-8 pr-4'
													 )
												}
												value={_data}
										 >
											 {({selected, active}) => (
													<>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {_data.name}
                        </span>

														{selected ? (
															 <span
																	className={classNames(
																		 active ? 'text-white' : 'text-indigo-600',
																		 'absolute inset-y-0 left-0 flex items-center pl-1.5'
																	)}
															 >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
														) : null}
													</>
											 )}
										 </Listbox.Option>
									))}
									{/*	button to add a new page  */}
									<div
										 className={'relative cursor-default select-none py-2 pl-8 pr-4'}
									>
										<button onClick={handleAddNewPage} className={"text-indigo-600 hover:text-indigo-900"}>Add a new
											page
										</button>
									</div>
								</Listbox.Options>
							</Transition>
						</div>
					</>
			 )}
		 </Listbox>
	)
}
