import React from 'react';
import {isTextHtml} from "../../_helper/isTextHtml";
import {TScreen} from "../../types/screens";

const OutcomeScreen = ({state: {state}}: TScreen) => {
	const isDescriptionHtml = isTextHtml(state.currentOutcome?.description || "");
	const Form = state.currentOutcome?.form;

	console.log(state)

	return (
		 <div>
			 <h1>{state.currentOutcome?.title}</h1>
			 {
				 isDescriptionHtml ? <div dangerouslySetInnerHTML={{__html: state.currentOutcome?.description || ""}}/>
						:
						<p>{state.currentOutcome?.description}</p>
			 }
			 {Form && <Form/>}
		 </div>
	);
};

export default OutcomeScreen;