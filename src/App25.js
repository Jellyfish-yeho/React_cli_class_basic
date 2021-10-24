// import { Component } from "react";

// class App25 extends Component{
//     render(){
       
//         return (
//             <div>
//                 <h1>This is App25 component based on class.</h1>
                
//             </div>
//         );
//     }    
// }

function App25(){
    //초기화 및 준비할게 있으면 jsx를 리턴해주기 전에 여기서 작업한다. 
    const fortuneToday = "Today is the last day of our class...";
    //이벤트 핸들러 함수도 상수로 미리 만들어 놓고 사용하면 된다. 
    const handleClick= ()=>{
        alert("Did you pressed the button?");
    }
    return (        
        <div>
            <h1>This is App25 component based on function.</h1>
            <p>Today's fortune : <strong>{fortuneToday}</strong></p>
            <button onClick={handleClick}>Press</button>
        </div>
    );
}

export default App25;