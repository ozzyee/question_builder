import {RenderScreen} from "@/components/drop/renderScreen";
import {questionLayout} from "@/_data/layouts";

export default function Page() {
	return (
		 <RenderScreen pageData={questionLayout}/>
	)
}