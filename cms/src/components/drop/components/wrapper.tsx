import React, {ReactNode} from "react";
import {Layouts} from "@/_data/layouts";
import {OnContentChange} from "@/_types/onContentChange";
import {ComponentSelector} from "@/components/drop/components/index";
import {v4 as uuidv4} from "uuid";
import {OnDelete} from "@/_types/onDelete";
import {OnClickAddNewPage} from "@/_types/onClickAddNewPage";

export const Wrapper = ({
	parentElementType,
	children,
	id,
	onContentChange,
	onDelete,
	onClickAddNewPage
}: WrapperProps) => {
	return (
		 <HtmlElement element={parentElementType} id={id}>
			 <>
				 {
					 children.map((layout, index) => {
						 const props = {
							 ...layout.props,
							 id: layout.id,
							 component: layout.component,
							 order: layout.order,
							 onContentChange,
							 onDelete,
							 onClickAddNewPage
						 }

						 return (
								<ComponentSelector {...props} key={layout.id}/>
						 )
					 })
				 }
			 </>
		 </HtmlElement>
	)
}


const HtmlElement: React.FC<HtmlElementProps> = ({element, children, ...rest}) => {
	return React.createElement(element, rest, children);
};

type HtmlElementProps = {
	element: keyof JSX.IntrinsicElements;
	children: ReactNode;
	id: string;
};

type WrapperProps = {
	parentElementType: keyof JSX.IntrinsicElements;
	order: number;
	id: string;
	children: Layouts[]
	onContentChange: OnContentChange,
	onDelete: OnDelete
	onClickAddNewPage: OnClickAddNewPage;
}