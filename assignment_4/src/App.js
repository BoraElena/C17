import React,{useState} from 'react';
import Acordion from "./components/Acordion"
import "./style.css"

function App() {
    const[active, setActive] = useState("");
    return (
        <div className='App'>
            <Acordion tittle ="Title1" active={active} setActive={setActive}/>
            <Acordion tittle ="Title2" active={active} setActive={setActive}/>
            <Acordion tittle ="Title3" active={active} setActive={setActive}/>

        </div>
    )
}
export default App;