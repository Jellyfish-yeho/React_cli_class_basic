import { useState } from "react";

function App27(){
    //입력한 이름의 상태 관리
    let [name, setName] = useState("");
    //입력한 주소의 상태 관리
    let [addr, setAddr] = useState("");
    return (        
        <div>
            <h1>This is App27 component based on function.</h1>
            <input type="text" onChange={(e)=>{
                setName(e.target.value); 
            }} placeholder="Enter your name..."/>
            <input type="text" onChange={(e)=>{
                setAddr(e.target.value); 
            }}placeholder="Enter your address..."/>
            <p>Entered name : {name}</p>
            <p>Entered address : {addr}</p>
        </div>
    );
}

export default App27;