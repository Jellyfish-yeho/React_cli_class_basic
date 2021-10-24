import { useState } from "react";
import FriendList from "./components/FriendList";

function App29(){

    let [friends,setFriends]=useState(["onew","minho","key","taemin"]);

    return (        
        <div>
            <h1>This is App29 component based on function.</h1>
            <button onClick={()=>{
                setFriends([...friends, 'jongHyun']);
            }}>Full!</button>
            <FriendList friends={friends} greet="Hi my babies :P"/>
        </div>
    );
}

export default App29;