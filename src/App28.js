import { useState } from "react";

function App28(){

    let [member, setMemberState] = useState({});

    return (        
        <div>
            <h1>This is App28 component based on function.</h1>
            <input type="text" onChange={(e)=>{
                 setMemberState({
                     ...member,
                     name:e.target.value
                });
            }} placeholder="Enter your name..."/>
            <input type="text" onChange={(e)=>{
                setMemberState({
                    ...member,
                    addr:e.target.value
                });
            }}placeholder="Enter your address..."/>
            <p>Entered name : {member.name}</p>
            <p>Entered address : {member.addr}</p>
        </div>
    );
}

export default App28;