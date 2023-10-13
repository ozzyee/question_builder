import './App.css'
import {Screens} from "./screens";
import {test_quesions} from "./_data/test";

function App() {
  return (
    <>
      <Screens questionsData={test_quesions}/>
    </>
  )
}

export default App
