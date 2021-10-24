import { useState } from "react";

function App26(){
    //import 한 useState() 함수를 호출하면 방 2개짜리 배열이 리턴된다. 
    // let result=useState(0);
    // console.log(result);
    // //함수의 0번 방에는 초기값, 1번 방에는 그 값을 수정할 함수가 들어있다. 
    // let [count, setCount] = result;

    //위 2줄의 코드를 한줄로 쓰면
    let [count, setCount] = useState(0);

    return (        
        <div>
            <h1>This is App26 component based on function.</h1>
            <p>Current count: <strong>{count}</strong></p>
            <button onClick={()=>{
                count++;
                setCount(count);
            }}>Plus</button>
        </div>
    );
}

export default App26;